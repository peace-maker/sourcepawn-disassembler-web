import { Component, OnInit, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxRttiDataSection, SmxDebugGlobalsTable } from 'sourcepawn-disassembler';
import { DebugVarEntry } from 'sourcepawn-disassembler/lib/types/rtti/debugvarentry';

@Component({
  selector: 'app-dbg-globals-section',
  templateUrl: './dbg-globals-section.component.html',
  styleUrls: ['./dbg-globals-section.component.scss']
})
export class DbgGlobalsSectionComponent implements OnInit {

  @Input() section: SectionWrapper;
  @Input() rttiData: SmxRttiDataSection;

  constructor() { }

  ngOnInit() {
  }

  get globals(): DebugVarEntry[] {
    return (<SmxDebugGlobalsTable>this.section.bin).entries;
  }

}
