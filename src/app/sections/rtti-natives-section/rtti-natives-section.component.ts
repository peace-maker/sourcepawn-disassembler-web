import { Component, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { RttiNativeEntry } from 'sourcepawn-disassembler/lib/types/rtti/rttinativeentry';
import { SmxRttiNativeTable, SmxRttiDataSection } from 'sourcepawn-disassembler';

@Component({
  selector: 'app-rtti-natives-section',
  templateUrl: './rtti-natives-section.component.html',
  styleUrls: ['./rtti-natives-section.component.scss']
})
export class RttiNativesSectionComponent {

  @Input() section: SectionWrapper;
  @Input() rttiData: SmxRttiDataSection;

  constructor() { }


  get natives(): RttiNativeEntry[] {
    return (<SmxRttiNativeTable>this.section.bin).natives;
  }

}
