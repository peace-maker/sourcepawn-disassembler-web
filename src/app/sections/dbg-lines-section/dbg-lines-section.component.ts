import { Component, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxDebugLineTable, SmxDebugFileTable } from 'sourcepawn-disassembler';

@Component({
  selector: 'app-dbg-lines-section',
  templateUrl: './dbg-lines-section.component.html',
  styleUrls: ['./dbg-lines-section.component.scss']
})
export class DbgLinesSectionComponent {

  @Input() section: SectionWrapper;
  @Input() dbgFilesSection: SmxDebugFileTable;

  constructor() { }


  get lines(): SmxDebugLineTable {
    return <SmxDebugLineTable>this.section.bin;
  }

  public findFile(addr: number): string | null {
    if (this.dbgFilesSection) {
      return this.dbgFilesSection.findFile(addr);
    }
    return null;
  }

}
