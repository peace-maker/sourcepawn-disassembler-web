import { Component, OnInit, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxTagTable, SmxLegacyDebugSymbolTable } from 'sourcepawn-disassembler';
import { DebugSymbolEntry } from 'sourcepawn-disassembler/lib/types/debugsymbolentry';
import { SymKind } from 'sourcepawn-disassembler/lib/types/symkind';
import { SymScope } from 'sourcepawn-disassembler/lib/types/symscope';

@Component({
  selector: 'app-dbg-symbols-functions',
  templateUrl: './dbg-symbols-functions.component.html',
  styleUrls: ['./dbg-symbols-functions.component.scss']
})
export class DbgSymbolsFunctionsComponent implements OnInit {

  @Input() section: SectionWrapper;
  @Input() tags: SmxTagTable;

  constructor() { }

  ngOnInit() {
  }

  get symbols(): SmxLegacyDebugSymbolTable {
    return <SmxLegacyDebugSymbolTable>this.section.bin;
  }

  public getTagName(tagid: number): string {
    if (!this.tags) {
      return '';
    }
    const tag = this.tags.findTag(tagid);
    return '(' + tag.name + ')';
  }

}
