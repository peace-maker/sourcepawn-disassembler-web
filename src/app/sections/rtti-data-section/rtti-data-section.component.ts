import { Component, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxRttiDataSection } from 'sourcepawn-disassembler';

@Component({
  selector: 'app-rtti-data-section',
  templateUrl: './rtti-data-section.component.html',
  styleUrls: ['./rtti-data-section.component.scss']
})
export class RttiDataSectionComponent {

  @Input() section: SectionWrapper;

  constructor() { }


  get data(): Uint8Array {
    const dataSection = this.section.bin as SmxRttiDataSection;
    return dataSection.bytes;
  }

}
