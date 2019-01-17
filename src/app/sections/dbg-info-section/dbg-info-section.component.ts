import { Component, OnInit, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxDebugInfoSection } from 'sourcepawn-disassembler';

@Component({
  selector: 'app-dbg-info-section',
  templateUrl: './dbg-info-section.component.html',
  styleUrls: ['./dbg-info-section.component.scss']
})
export class DbgInfoSectionComponent implements OnInit {

  @Input() section: SectionWrapper;

  constructor() { }

  ngOnInit() {
  }

  get info(): SmxDebugInfoSection {
    return <SmxDebugInfoSection>this.section.bin;
  }
}
