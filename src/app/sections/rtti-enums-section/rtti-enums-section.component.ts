import { Component, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { RttiEnumEntry } from 'sourcepawn-disassembler/lib/types';
import { SmxRttiEnumTable } from 'sourcepawn-disassembler';

@Component({
  selector: 'app-rtti-enums-section',
  templateUrl: './rtti-enums-section.component.html',
  styleUrls: ['./rtti-enums-section.component.scss']
})
export class RttiEnumsSectionComponent {

  @Input() section: SectionWrapper;

  constructor() { }


  get enums(): RttiEnumEntry[] {
    return (<SmxRttiEnumTable>this.section.bin).enums;
  }

}
