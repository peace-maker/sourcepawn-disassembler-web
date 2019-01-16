import { Component, OnInit, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { SmxTagTable } from 'sourcepawn-disassembler';
import { TagFlags } from 'sourcepawn-disassembler/lib/types/tagentry';

@Component({
  selector: 'app-tags-section',
  templateUrl: './tags-section.component.html',
  styleUrls: ['./tags-section.component.scss']
})
export class TagsSectionComponent implements OnInit {

  @Input() section: SectionWrapper;

  constructor() { }

  ngOnInit() {
  }

  get tags(): SmxTagTable {
    return <SmxTagTable>this.section.bin;
  }

  public flagsToString(flags: TagFlags): string {
    const flagNames = [];
    if ((flags & TagFlags.Fixed) > 0) {
      flagNames.push('Fixed');
    }
    if ((flags & TagFlags.Func) > 0) {
      flagNames.push('Func');
    }
    if ((flags & TagFlags.Object) > 0) {
      flagNames.push('Object');
    }
    if ((flags & TagFlags.Enum) > 0) {
      flagNames.push('Enum');
    }
    if ((flags & TagFlags.Methodmap) > 0) {
      flagNames.push('Methodmap');
    }
    if ((flags & TagFlags.Struct) > 0) {
      flagNames.push('Struct');
    }
    return flagNames.join(', ');
  }

}
