import { Component, OnInit, Input } from '@angular/core';
import { SmxTagTable } from 'sourcepawn-disassembler';
import { DebugSymbolEntry } from 'sourcepawn-disassembler/lib/types/debugsymbolentry';

@Component({
  selector: 'app-dbg-symbols-detail',
  templateUrl: './dbg-symbols-detail.component.html',
  styleUrls: ['./dbg-symbols-detail.component.scss']
})
export class DbgSymbolsDetailComponent implements OnInit {

  @Input() symbol: DebugSymbolEntry;
  @Input() tags: SmxTagTable;

  constructor() { }

  ngOnInit() {
  }

  public getTagName(tagid: number): string {
    if (!this.tags) {
      return '';
    }
    const tag = this.tags.findTag(tagid);
    return '(' + tag.name + ')';
  }
}
