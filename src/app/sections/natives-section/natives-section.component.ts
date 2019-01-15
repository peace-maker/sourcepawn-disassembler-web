import { Component, OnInit, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxNativeTable } from 'sourcepawn-disassembler';

@Component({
  selector: 'app-natives-section',
  templateUrl: './natives-section.component.html',
  styleUrls: ['./natives-section.component.scss']
})
export class NativesSectionComponent implements OnInit {

  @Input() section: SectionWrapper;

  constructor() { }

  ngOnInit() {
  }

  get natives(): SmxNativeTable {
    return <SmxNativeTable>this.section.bin;
  }

}
