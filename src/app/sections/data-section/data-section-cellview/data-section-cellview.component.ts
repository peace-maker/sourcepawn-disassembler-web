import { Component, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxDataSection } from 'sourcepawn-disassembler';

@Component({
  selector: 'app-data-section-cellview',
  templateUrl: './data-section-cellview.component.html',
  styleUrls: ['./data-section-cellview.component.scss']
})
export class DataSectionCellviewComponent {

  @Input() section: SectionWrapper;
  private cells;

  constructor() { }


  public getCells() {
    if (this.cells !== undefined) {
      return this.cells;
    }

    const dataSection = this.section.bin as SmxDataSection;
    const reader = new Uint32Array(dataSection.dataReader());

    this.cells = [];
    let row = [];
    let rowStart = 0;
    for (let i = 0; i < reader.length; i++) {
      row.push(reader[i]);

      // Split the data into 8 chunks.
      if (row.length === 8) {
        this.cells.push({'offset': rowStart, 'cells': row});
        row = [];
        rowStart += 8 * 4;
      }
    }
    // Add the rest of the bytes.
    if (row.length > 0) {
      this.cells.push({'offset': rowStart, 'cells': row });
    }

    return this.cells;
  }
}
