import { Component, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxPubvarTable } from 'sourcepawn-disassembler';

@Component({
  selector: 'app-pubvars-section',
  templateUrl: './pubvars-section.component.html',
  styleUrls: ['./pubvars-section.component.scss']
})
export class PubvarsSectionComponent {

  @Input() section: SectionWrapper;

  constructor() { }


  get pubvars(): SmxPubvarTable {
    return <SmxPubvarTable>this.section.bin;
  }

}
