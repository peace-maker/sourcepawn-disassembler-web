import { Component, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxRttiDataSection, SmxRttiEnumStructFieldTable } from 'sourcepawn-disassembler';
import { RttiEnumEntry, RttiEnumStructFieldEntry } from 'sourcepawn-disassembler/lib/types';

@Component({
  selector: 'app-rtti-enumstruct-fields-section',
  templateUrl: './rtti-enumstruct-fields-section.component.html',
  styleUrls: ['./rtti-enumstruct-fields-section.component.scss']
})
export class RttiEnumstructFieldsSectionComponent {

  @Input() section: SectionWrapper;
  @Input() rttiData: SmxRttiDataSection;

  constructor() { }


  get fields(): RttiEnumStructFieldEntry[] {
    return (<SmxRttiEnumStructFieldTable>this.section.bin).entries;
  }
}
