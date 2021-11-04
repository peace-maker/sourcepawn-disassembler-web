import { Component, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxDebugFileTable } from 'sourcepawn-disassembler';

@Component({
  selector: 'app-dbg-files-section',
  templateUrl: './dbg-files-section.component.html',
  styleUrls: ['./dbg-files-section.component.scss']
})
export class DbgFilesSectionComponent {

  @Input() section: SectionWrapper;

  constructor() { }


  get files(): SmxDebugFileTable {
    return <SmxDebugFileTable>this.section.bin;
  }

}
