import { Component, OnInit, Input } from '@angular/core';
import { SmxNameTable } from 'sourcepawn-disassembler';
import { SectionWrapper } from '../../sectionwrapper';

@Component({
  selector: 'app-names-section',
  templateUrl: './names-section.component.html',
  styleUrls: ['./names-section.component.scss']
})
export class NamesSectionComponent implements OnInit {

  @Input() section: SectionWrapper;

  constructor() { }

  ngOnInit() {
  }

  public namesList() {
    const names = [];
    const namesSection = this.section.bin as SmxNameTable;
    for (const i of namesSection.offsets) {
      names.push({'offset': i, 'string': namesSection.stringAt(i)});
    }
    return names;
  }
}
