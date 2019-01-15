import { Component, OnInit, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxDataSection } from 'sourcepawn-disassembler';

@Component({
  selector: 'app-data-section-byteview',
  templateUrl: './data-section-byteview.component.html',
  styleUrls: ['./data-section-byteview.component.scss']
})
export class DataSectionByteviewComponent implements OnInit {

  @Input() section: SectionWrapper;
  private bytes;

  constructor() { }

  ngOnInit() {
  }

  public getBytes() {
    // Only compute this view once.
    if (this.bytes !== undefined) {
      return this.bytes;
    }

    const dataSection = this.section.bin as SmxDataSection;
    const reader = new Uint8Array(dataSection.dataReader());

    this.bytes = [];
    let row = [];
    let rowStart = 0;
    for (let i = 0; i < dataSection.dataheader.datasize; i++) {
      row.push(reader[i]);

      // Split the data into 16 byte chunks.
      if (row.length === 16) {
        this.bytes.push({'offset': rowStart, 'bytes': row});
        row = [];
        rowStart += 16;
      }
    }
    // Add the rest of the bytes.
    if (row.length > 0) {
      this.bytes.push({'offset': rowStart, 'bytes': row });
    }

    return this.bytes;
  }

  isNumber(val) {
    return typeof val === 'number';
  }
}
