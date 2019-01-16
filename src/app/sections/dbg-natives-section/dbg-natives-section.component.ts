import { Component, OnInit, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxDebugNativeTable, SmxTagTable } from 'sourcepawn-disassembler';

@Component({
  selector: 'app-dbg-natives-section',
  templateUrl: './dbg-natives-section.component.html',
  styleUrls: ['./dbg-natives-section.component.scss']
})
export class DbgNativesSectionComponent implements OnInit {

  @Input() section: SectionWrapper;
  @Input() tags: SmxTagTable;

  constructor() { }

  ngOnInit() {
  }

  get natives(): SmxDebugNativeTable {
    return <SmxDebugNativeTable>this.section.bin;
  }

  public getTagName(tagid: number): string {
    if (!this.tags) {
      return '';
    }
    const tag = this.tags.findTag(tagid);
    return '(' + tag.name + ')';
  }

}
