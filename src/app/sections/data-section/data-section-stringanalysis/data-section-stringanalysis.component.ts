import { Component, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxDataSection } from 'sourcepawn-disassembler';

@Component({
  selector: 'app-data-section-stringanalysis',
  templateUrl: './data-section-stringanalysis.component.html',
  styleUrls: ['./data-section-stringanalysis.component.scss']
})
export class DataSectionStringanalysisComponent {

  @Input() section: SectionWrapper;

  constructor() { }


  public stringList() {
    const strings = [];
    const whitespace = [0x09, 0x0a, 0x0b, 0x0c, 0x0d];
    const whitespace_printable = ['\\t', '\\n', '\\v', '\\f', '\\r'];

    const dataSection = this.section.bin as SmxDataSection;
    const reader = new Uint8Array(dataSection.dataReader());

    let currentString = '';
    for (let i = 0; i < reader.length; i++) {
      const b = reader[i];
      if (b === 0 && currentString.length > 0) {
        strings.push({'offset': i, 'string': currentString});
        currentString = '';
        continue;
      }

      // Display whitespace characters as their escape sequences, but treat them as part of strings.
      if (whitespace.includes(b)) {
        currentString += whitespace_printable[whitespace.indexOf(b)];
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
