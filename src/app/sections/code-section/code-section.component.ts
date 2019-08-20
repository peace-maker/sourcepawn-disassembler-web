import { Component, OnInit, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxCodeV1Section, SourcePawnFile, V1Instruction, V1Disassembler, V1Param } from 'sourcepawn-disassembler';
import { CodeV1Header, CodeV1Flags, CodeV1Features } from 'sourcepawn-disassembler/lib/types/codev1header';

export class AvailableFunction {
  public instructions: V1Instruction[];
  public error: string;

  constructor(public address: number, public name: string) { }
}

export class PrintableParameter {
  public extra: any = null;
  constructor(public type: V1Param, public value: number) { }
}

@Component({
  selector: 'app-code-section',
  templateUrl: './code-section.component.html',
  styleUrls: ['./code-section.component.scss']
})
export class CodeSectionComponent implements OnInit {

  @Input() smxfile: SourcePawnFile;
  @Input() section: SectionWrapper;
  selectedFunction: AvailableFunction;
  private functionMap: Map<number, AvailableFunction>;
  private functionList: AvailableFunction[];
  private extraHeaders: any[];
  V1Param = V1Param;

  constructor() { }

  ngOnInit() {
  }

  public disassembleFunction(fun: AvailableFunction): V1Instruction[] | null {
    if (fun.instructions) {
      return fun.instructions;
    }

    try {
      fun.instructions = V1Disassembler.Disassemble(this.smxfile, fun.address);
      return fun.instructions;
    } catch (err) {
      console.log(err);
      fun.error = err;
      return null;
    }
  }

  public mergeParameterInfo(ins: V1Instruction): PrintableParameter[] {
    const params = [];
    for (let i = 0; i < ins.params.length; i++) {
      if (i >= ins.info.params.length) {
        break;
      }

      const param = new PrintableParameter(ins.info.params[i], ins.params[i]);
      switch (param.type) {
        case V1Param.Constant:
          param.extra = param.value;
          break;
        case V1Param.Native:
          if (this.smxfile.natives && param.value < this.smxfile.natives.entries.length) {
            param.extra = this.smxfile.natives.entries[param.value].name;
          }
          break;
        case V1Param.Jump:
          const delta = param.value - ins.address;
          if (delta >= 0) {
            param.extra = '+0x' + delta.toString(16);
          } else {
            param.extra = '-0x' + (-delta).toString(16);
          }
          break;
        case V1Param.Address: {
          const symName = this.smxfile.findGlobalName(param.value);
          if (symName) {
            param.extra = symName;
          } else {
            param.extra = param.value;
          }
          break;
        }
        case V1Param.Stack: {
          const symName = this.smxfile.findLocalName(ins.address, param.value);
          if (symName) {
            param.extra = symName;
          } else {
            param.extra = param.value;
          }
          break;
        }
        case V1Param.Function:
          param.extra = this.smxfile.findFunctionName(param.value);
          break;
      }
      params.push(param);
    }
    return params;
  }

  public selectFunction(address: number): void {
    if (!this.functionMap.has(address)) {
      return;
    }
    this.selectedFunction = this.functionMap.get(address);
  }

  get functions(): AvailableFunction[] {
    if (this.functionList) {
      return this.functionList;
    }

    const functions = new Map<number, AvailableFunction>();

    if (this.smxfile.publics) {
      for (const fun of this.smxfile.publics.entries) {
        if (!functions.has(fun.address)) {
          functions.set(fun.address, new AvailableFunction(fun.address, fun.name));
        }
      }
    }
    if (this.smxfile.debugSymbols) {
      for (const fun of this.smxfile.debugSymbols.functions) {
        if (!functions.has(fun.address)) {
          functions.set(fun.address, new AvailableFunction(fun.address, fun.name));
        }
      }
    }
    if (this.smxfile.calledFunctions) {
      for (const fun of this.smxfile.calledFunctions.functions) {
        if (!functions.has(fun.address)) {
          functions.set(fun.address, new AvailableFunction(fun.address, fun.name));
        }
      }
    }

    this.functionMap = functions;
    this.functionList = Array.from(functions.values());
    return this.functionList;
  }

  get headers() {
    if (this.extraHeaders) {
      return this.extraHeaders;
    }

    this.extraHeaders = [];

    // Add code section specific headers too.
    const codeSection = <SmxCodeV1Section>this.section.bin;
    if (codeSection) {
      this.extraHeaders.push({ 'key': 'codesize', 'value': codeSection.codeheader.codesize + ' bytes' });
      this.extraHeaders.push({ 'key': 'cellsize', 'value': codeSection.codeheader.cellsize + ' bytes' });
      this.extraHeaders.push({ 'key': 'codeversion', 'value': '0x' + codeSection.codeheader.codeversion.toString(16) });
      this.extraHeaders.push({
        'key': 'flags',
        'value': '0x' + codeSection.codeheader.flags.toString(16) +
          ' (' + CodeV1Flags[codeSection.codeheader.flags].toString() + ')'
      });
      this.extraHeaders.push({ 'key': 'main', 'value': '0x' + codeSection.codeheader.main.toString(16) });
      this.extraHeaders.push({ 'key': 'codeoffs', 'value': '0x' + codeSection.codeheader.codeoffs.toString(16) });
      if (codeSection.codeheader.codeversion >= CodeV1Header.VERSION_FEATURES) {
        // Translate feature bitset to readable string.
        const featureList = [];
        if (codeSection.codeheader.features & CodeV1Features.DirectArrays) {
          featureList.push('DirectArrays');
        }
        const features = ' (' + featureList.join(', ') + ')';
        this.extraHeaders.push({ 'key': 'features', 'value': '0x' + codeSection.codeheader.features.toString(16) + features });
      }
    }

    return this.extraHeaders;
  }

}
