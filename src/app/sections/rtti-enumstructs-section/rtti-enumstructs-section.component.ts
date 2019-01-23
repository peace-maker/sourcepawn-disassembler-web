import { Component, OnInit, Input } from '@angular/core';
import { SmxRttiDataSection, SmxRttiEnumStructTable, SourcePawnFile } from 'sourcepawn-disassembler';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { RttiEnumStructEntry, RttiEnumStructFieldEntry } from 'sourcepawn-disassembler/lib/types';

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
}
