import { Component, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxRttiDataSection, SmxRttiMethodTable } from 'sourcepawn-disassembler';
import { RttiMethodEntry } from 'sourcepawn-disassembler/lib/types/rtti/rttimethodentry';

@Component({
  selector: 'app-rtti-methods-section',
  templateUrl: './rtti-methods-section.component.html',
  styleUrls: ['./rtti-methods-section.component.scss']
})
export class RttiMethodsSectionComponent {

  @Input() section: SectionWrapper;
  @Input() rttiData: SmxRttiDataSection;

  constructor() { }


  get methods(): RttiMethodEntry[] {
    return (<SmxRttiMethodTable>this.section.bin).methods;
  }

}
