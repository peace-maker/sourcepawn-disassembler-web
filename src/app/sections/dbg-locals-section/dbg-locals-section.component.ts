import { Component, OnInit, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { DebugVarEntry } from 'sourcepawn-disassembler/lib/types';
import { SmxDebugLocalsTable, SmxRttiDataSection } from 'sourcepawn-disassembler';

@Component({
  selector: 'app-dbg-locals-section',
  templateUrl: './dbg-locals-section.component.html',
  styleUrls: ['./dbg-locals-section.component.scss']
})
export class DbgLocalsSectionComponent implements OnInit {

  @Input() section: SectionWrapper;

  constructor() { }

  ngOnInit() {
  }

  get locals(): SmxDebugLocalsTable {
    return <SmxDebugLocalsTable>this.section.bin;
  }
}
