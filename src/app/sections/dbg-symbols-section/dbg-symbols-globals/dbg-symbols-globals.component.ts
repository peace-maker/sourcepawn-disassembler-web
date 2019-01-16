import { Component, OnInit, Input} from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxTagTable, SmxLegacyDebugSymbolTable } from 'sourcepawn-disassembler';
import { SymKind } from 'sourcepawn-disassembler/lib/types/symkind';
import { DebugSymbolEntry } from 'sourcepawn-disassembler/lib/types/debugsymbolentry';
import { SymScope } from 'sourcepawn-disassembler/lib/types/symscope';

@Component({
  selector: 'app-dbg-symbols-globals',
  templateUrl: './dbg-symbols-globals.component.html',
  styleUrls: ['./dbg-symbols-globals.component.scss']
})
export class DbgSymbolsGlobalsComponent implements OnInit {

  @Input() section: SectionWrapper;
  @Input() tags: SmxTagTable;
  private globalVariables: DebugSymbolEntry[];

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
