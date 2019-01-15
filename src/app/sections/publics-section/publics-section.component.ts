import { Component, OnInit, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxPublicTable } from 'sourcepawn-disassembler';

@Component({
  selector: 'app-publics-section',
  templateUrl: './publics-section.component.html',
  styleUrls: ['./publics-section.component.scss']
})
export class PublicsSectionComponent implements OnInit {

  @Input() section: SectionWrapper;

  constructor() { }

  ngOnInit() {
  }

  get publics(): SmxPublicTable {
    return <SmxPublicTable>this.section.bin;
  }

}
