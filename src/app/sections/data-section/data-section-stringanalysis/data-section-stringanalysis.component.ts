import { Component, OnInit, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxDataSection } from 'sourcepawn-disassembler';

@Component({
  selector: 'app-data-section-stringanalysis',
  templateUrl: './data-section-stringanalysis.component.html',
  styleUrls: ['./data-section-stringanalysis.component.scss']
})
export class DataSectionStringanalysisComponent implements OnInit {

  @Input() section: SectionWrapper;

  constructor() { }

  ngOnInit() {
  }

  public stringList() {
    const strings = [];

    const dataSection = this.section.bin as SmxDataSection;
    const reader = new Uint8Array(dataSection.dataReader());

    let currentString = '';
    for (let i = 0; i < dataSection.dataheader.datasize; i++) {
      const b = reader[i];
      if (b === 0 && currentString.length > 0) {
        strings.push({'offset': i, 'string': currentString});
        currentString = '';
        continue;
      }

      // Printable ascii range
      if (b < 0x20 || b > 0x7f) {
        currentString = '';
        continue;
      }

      currentString += String.fromCharCode(b);
    }

    return strings;
  }

}
