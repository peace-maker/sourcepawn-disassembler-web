import { Component, OnInit, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxTagTable, SmxLegacyDebugSymbolTable } from 'sourcepawn-disassembler';

@Component({
  selector: 'app-dbg-symbols-section',
  templateUrl: './dbg-symbols-section.component.html',
  styleUrls: ['./dbg-symbols-section.component.scss']
})
export class DbgSymbolsSectionComponent implements OnInit {

  @Input() section: SectionWrapper;
  @Input() subsection: string;
  @Input() tags: SmxTagTable;

  constructor() { }

  ngOnInit() {
  }

  get symbols(): SmxLegacyDebugSymbolTable {
    return <SmxLegacyDebugSymbolTable>this.section.bin;
  }

}
