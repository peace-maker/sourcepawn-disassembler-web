import { Component, OnInit, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxRttiDataSection, SmxRttiTypedefTable } from 'sourcepawn-disassembler';
import { RttiTypedefEntry } from 'sourcepawn-disassembler/lib/types';

@Component({
  selector: 'app-rtti-typedefs-section',
  templateUrl: './rtti-typedefs-section.component.html',
  styleUrls: ['./rtti-typedefs-section.component.scss']
})
export class RttiTypedefsSectionComponent implements OnInit {

  @Input() section: SectionWrapper;
  @Input() rttiData: SmxRttiDataSection;

  constructor() { }

  ngOnInit() {
  }

  get typedefs(): RttiTypedefEntry[] {
    return (<SmxRttiTypedefTable>this.section.bin).typedefs;
  }

}
