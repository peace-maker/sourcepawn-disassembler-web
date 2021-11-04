import { Component, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxRttiDataSection, SmxRttiTypedefTable } from 'sourcepawn-disassembler';
import { RttiTypedefEntry } from 'sourcepawn-disassembler/lib/types';

@Component({
  selector: 'app-rtti-typedefs-section',
  templateUrl: './rtti-typedefs-section.component.html',
  styleUrls: ['./rtti-typedefs-section.component.scss']
})
export class RttiTypedefsSectionComponent {

  @Input() section: SectionWrapper;
  @Input() rttiData: SmxRttiDataSection;

  constructor() { }


  get typedefs(): RttiTypedefEntry[] {
    return (<SmxRttiTypedefTable>this.section.bin).typedefs;
  }

}
