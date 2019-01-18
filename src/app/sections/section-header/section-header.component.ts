import { Component, OnInit, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxRttiListTable } from 'sourcepawn-disassembler';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {

  public hideHeaders = true;
  private headers: any[];
  @Input() section: SectionWrapper;
  @Input() extraHeaders: any[];

  constructor() { }

  ngOnInit() {
  }

  public sectionHeaders() {
    if (this.headers) {
      return this.headers;
    }

    this.headers = this.section.getSectionHeaders();
    // Add rtti list table headers.
    if (this.section.bin instanceof SmxRttiListTable) {
      const rttiTable = <SmxRttiListTable>this.section.bin;
      this.headers.push({'key': '.headersize', 'value': rttiTable.headersize + ' bytes'});
      this.headers.push({'key': '.rowsize', 'value': rttiTable.rowsize + ' bytes'});
      this.headers.push({'key': '.rowcount', 'value': rttiTable.rowcount});
    }

    if (this.extraHeaders) {
      this.headers.push(...this.extraHeaders);
    }
    return this.headers;
  }

}
