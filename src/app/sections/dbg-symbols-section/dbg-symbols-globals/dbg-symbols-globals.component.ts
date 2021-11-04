import { Component, Input} from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxTagTable, SmxLegacyDebugSymbolTable } from 'sourcepawn-disassembler';

@Component({
  selector: 'app-dbg-symbols-globals',
  templateUrl: './dbg-symbols-globals.component.html',
  styleUrls: ['./dbg-symbols-globals.component.scss']
})
export class DbgSymbolsGlobalsComponent {

  @Input() section: SectionWrapper;
  @Input() tags: SmxTagTable;

  constructor() { }

  get symbols(): SmxLegacyDebugSymbolTable {
    return <SmxLegacyDebugSymbolTable>this.section.bin;
  }
}
