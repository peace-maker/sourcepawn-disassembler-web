import { Component, OnInit, Input } from '@angular/core';
import { SmxRttiDataSection, SmxRttiEnumStructTable, SourcePawnFile } from 'sourcepawn-disassembler';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { RttiEnumStructEntry, RttiEnumStructFieldEntry, RttiMethodEntry } from 'sourcepawn-disassembler/lib/types';

@Component({
  selector: 'app-rtti-enumstructs-section',
  templateUrl: './rtti-enumstructs-section.component.html',
  styleUrls: ['./rtti-enumstructs-section.component.scss']
})
export class RttiEnumstructsSectionComponent implements OnInit {

  @Input() section: SectionWrapper;
  @Input() smxfile: SourcePawnFile;

  constructor() { }

  ngOnInit() {
  }

  get enumstructs(): RttiEnumStructEntry[] {
    return (<SmxRttiEnumStructTable>this.section.bin).entries;
  }

  get rttiData(): SmxRttiDataSection {
    return this.smxfile.rttiData;
  }

  public getEnumStructFields(index: number): RttiEnumStructFieldEntry[] {
    return this.smxfile.getFieldsOfEnumStruct(index);
  }

  public getEnumStructMethods(index: number): RttiMethodEntry[] {
    if (!this.smxfile.rttiMethods) {
      return [];
    }

    const rttiEnumStructs = <SmxRttiEnumStructTable>this.section.bin;
    if (index < 0 || index >= rttiEnumStructs.rowcount) {
      return [];
    }

    // Find all methods starting with the name of this enum struct
    // <enum struct name>::<method name>
    const enumStructEntry = rttiEnumStructs.entries[index];
    const needle = enumStructEntry.name + '::';
    const methods = [];
    for (const method of this.smxfile.rttiMethods.methods) {
      if (method.name.startsWith(needle)) {
        methods.push(method);
      }
    }
    return methods;
  }
}
