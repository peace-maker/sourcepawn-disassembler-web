import { Component, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';
import { RttiClassDefEntry } from 'sourcepawn-disassembler/lib/types/rtti/rtticlassdefentry';
import { SmxRttiClassDefTable, SourcePawnFile, SmxRttiDataSection } from 'sourcepawn-disassembler';
import { RttiFieldEntry } from 'sourcepawn-disassembler/lib/types/rtti/rttifieldentry';

@Component({
  selector: 'app-rtti-classdefs-section',
  templateUrl: './rtti-classdefs-section.component.html',
  styleUrls: ['./rtti-classdefs-section.component.scss']
})
export class RttiClassdefsSectionComponent {

  @Input() section: SectionWrapper;
  @Input() smxfile: SourcePawnFile;

  constructor() { }


  get classdefs(): RttiClassDefEntry[] {
    return (<SmxRttiClassDefTable>this.section.bin).classdefs;
  }

  get rttiData(): SmxRttiDataSection {
    return this.smxfile.rttiData;
  }

  public getClassFields(index: number): RttiFieldEntry[] {
    return this.smxfile.getFieldsOfClassDef(index);
  }
}
