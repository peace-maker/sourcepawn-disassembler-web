import { Component, OnInit, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxDataSection } from 'sourcepawn-disassembler';

export enum ViewType {
  ByteView,
  CellView,
  StringAnalysis
}

@Component({
  selector: 'app-data-section',
  templateUrl: './data-section.component.html',
  styleUrls: ['./data-section.component.scss']
})
export class DataSectionComponent implements OnInit {

  ViewType = ViewType;
  viewType: ViewType = ViewType.ByteView;
  @Input() section: SectionWrapper;
  private extraHeaders: any[];

  constructor() { }

  ngOnInit() {
  }

  get data(): Uint8Array {
    const dataSection = this.section.bin as SmxDataSection;
    return new Uint8Array(dataSection.dataReader());
  }

  get datasize(): number {
    const dataSection = this.section.bin as SmxDataSection;
    return dataSection.dataheader.datasize;
  }

  get headers() {
    if (this.extraHeaders) {
      return this.extraHeaders;
    }

    this.extraHeaders = [];

    // Add data section specific headers too.
    const dataSection = <SmxDataSection>this.section.bin;
    if (dataSection) {
      this.extraHeaders.push({'key': 'datasize', 'value': dataSection.dataheader.datasize + ' bytes'});
      this.extraHeaders.push({'key': 'memorysize', 'value': dataSection.dataheader.memorysize + ' bytes'});
      this.extraHeaders.push({'key': 'dataoffs', 'value': '0x' + dataSection.dataheader.dataoffs.toString(16)});
    }

    return this.extraHeaders;
  }

}
