import { Component, OnInit, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxDebugMethodTable, SmxRttiMethodTable } from 'sourcepawn-disassembler';
import { DebugMethodEntry } from 'sourcepawn-disassembler/lib/types/rtti/debugmethodentry';

@Component({
  selector: 'app-dbg-methods-section',
  templateUrl: './dbg-methods-section.component.html',
  styleUrls: ['./dbg-methods-section.component.scss']
})
export class DbgMethodsSectionComponent implements OnInit {

  @Input() section: SectionWrapper;
  @Input() rttiMethods: SmxRttiMethodTable;

  constructor() { }

  ngOnInit() {
  }

  get methods(): DebugMethodEntry[] {
    return (<SmxDebugMethodTable>this.section.bin).entries;
  }

  public getMethod(index: number): string {
    if (!this.rttiMethods || index < 0 || index >= this.rttiMethods.methods.length) {
      return '';
    }
    return '(' + this.rttiMethods.methods[index].name + ')';
  }

}
