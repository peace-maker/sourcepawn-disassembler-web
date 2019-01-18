import { Component, OnInit, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxRttiFieldTable, SmxRttiDataSection } from 'sourcepawn-disassembler';
import { RttiFieldEntry } from 'sourcepawn-disassembler/lib/types/rtti/rttifieldentry';

@Component({
  selector: 'app-rtti-fields-section',
  templateUrl: './rtti-fields-section.component.html',
  styleUrls: ['./rtti-fields-section.component.scss']
})
export class RttiFieldsSectionComponent implements OnInit {

  @Input() section: SectionWrapper;
  @Input() rttiData: SmxRttiDataSection;

  constructor() { }

  ngOnInit() {
  }

  get fields(): RttiFieldEntry[] {
    return (<SmxRttiFieldTable>this.section.bin).fields;
  }

}
