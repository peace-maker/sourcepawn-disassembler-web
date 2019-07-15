import { Component, OnInit, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxDebugMethodTable, SmxRttiMethodTable, SmxRttiDataSection } from 'sourcepawn-disassembler';
import { DebugMethodEntry } from 'sourcepawn-disassembler/lib/types/rtti/debugmethodentry';
import { RttiMethodEntry, DebugVarEntry, SymScope } from 'sourcepawn-disassembler/lib/types';

@Component({
  selector: 'app-dbg-methods-section',
  templateUrl: './dbg-methods-section.component.html',
  styleUrls: ['./dbg-methods-section.component.scss']
})
export class DbgMethodsSectionComponent implements OnInit {

  @Input() section: SectionWrapper;
  @Input() rttiMethods: SmxRttiMethodTable;
  @Input() rttiData: SmxRttiDataSection;
  hideMethod: boolean[];

  constructor() {
  }

  ngOnInit() {
    this.hideMethod = new Array(this.methods.length).fill(true);
  }

  get methods(): DebugMethodEntry[] {
    return (<SmxDebugMethodTable>this.section.bin).entries;
  }

  public isMethodHidden(index: number): boolean {
    return this.hideMethod.length < index || this.hideMethod[index];
  }

  public toggleMethod(index: number): void {
    if (index < this.hideMethod.length) {
      this.hideMethod[index] = !this.hideMethod[index];
    }
  }

  public getMethodName(index: number): string {
    if (!this.rttiMethods || index < 0 || index >= this.rttiMethods.methods.length) {
      return '';
    }
    return '(' + this.rttiMethods.methods[index].name + ')';
  }

  public getMethod(index: number): RttiMethodEntry | null {
    if (!this.rttiMethods || index < 0 || index >= this.rttiMethods.methods.length) {
      return null;
    }
    return this.rttiMethods.methods[index];
  }

  public getMethodArguments(index: number): DebugVarEntry[] {
    const debugMethods = <SmxDebugMethodTable>this.section.bin;
    const locals = debugMethods.getMethodLocals(index);
    return locals.filter((value: DebugVarEntry) => value.scope === SymScope.Arg);
  }

  public getMethodLocals(index: number): DebugVarEntry[] {
    const debugMethods = <SmxDebugMethodTable>this.section.bin;
    const locals = debugMethods.getMethodLocals(index);
    return locals.filter((value: DebugVarEntry) => value.scope !== SymScope.Arg);
  }

}
