import { Component, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxRttiDataSection, SmxRttiTypesetTable } from 'sourcepawn-disassembler';
import { RttiTypesetEntry } from 'sourcepawn-disassembler/lib/types';

@Component({
  selector: 'app-rtti-typesets-section',
  templateUrl: './rtti-typesets-section.component.html',
  styleUrls: ['./rtti-typesets-section.component.scss']
})
export class RttiTypesetsSectionComponent {

  @Input() section: SectionWrapper;
  @Input() rttiData: SmxRttiDataSection;

  constructor() { }


  get typesets(): RttiTypesetEntry[] {
    return (<SmxRttiTypesetTable>this.section.bin).typesets;
  }

}
