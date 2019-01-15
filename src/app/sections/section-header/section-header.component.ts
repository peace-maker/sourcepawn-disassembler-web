import { Component, OnInit, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';

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
    if (this.extraHeaders) {
      this.headers.push(...this.extraHeaders);
    }
    return this.headers;
  }

}
