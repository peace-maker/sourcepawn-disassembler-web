import { Component, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxPublicTable } from 'sourcepawn-disassembler';

@Component({
  selector: 'app-publics-section',
  templateUrl: './publics-section.component.html',
  styleUrls: ['./publics-section.component.scss']
})
export class PublicsSectionComponent {

  @Input() section: SectionWrapper;

  constructor() { }


  get publics(): SmxPublicTable {
    return <SmxPublicTable>this.section.bin;
  }

}
