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

    return this.cells;
  }
}
