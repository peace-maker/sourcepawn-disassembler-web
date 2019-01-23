import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SourcePawnFile, SmxDebugInfoSection } from 'sourcepawn-disassembler';
import { SectionWrapper } from '../sectionwrapper';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  @Input() smxfile: SourcePawnFile;
  @Output() selectSection = new EventEmitter<SectionWrapper>();

  constructor() { }

  ngOnInit() {
  }

  public sectionList() {
    if (this.smxfile === undefined || this.smxfile.header === undefined) {
      return [];
    }

    const sections = [];
    // Add basic .smx header.
    const headerSection = new SectionWrapper();
    headerSection.name = '(header)';
    headerSection.hasDropdown = false;
    sections.push(headerSection);

    for (const meta of this.smxfile.header.sections) {
      const section = new SectionWrapper();
      section.header = meta;
      section.name = meta.name;
      section.hasDropdown = false;

      switch (meta.name) {
        case '.code':
          section.bin = this.smxfile.code;
          break;
        case '.data':
          section.bin = this.smxfile.data;
          break;
        case '.publics':
          section.bin = this.smxfile.publics;
          break;
        case '.pubvars':
          section.bin = this.smxfile.pubvars;
          break;
        case '.names':
          section.bin = this.smxfile.names;
          break;
        case '.natives':
          section.bin = this.smxfile.natives;
          break;
        case '.tags':
          section.bin = this.smxfile.tags;
          break;
        case '.dbg.files':
          section.bin = this.smxfile.debugFiles;
          break;
        case '.dbg.lines':
          section.bin = this.smxfile.debugLines;
          break;
        case '.dbg.natives':
          section.bin = this.smxfile.debugNatives;
          break;
        case '.dbg.symbols':
          section.bin = this.smxfile.debugSymbols;
          if (section.bin) {
            section.hasDropdown = true;
            section.dropdown = [];
            section.dropdown.push('globals');
            section.dropdown.push('functions');
          }
          break;
        case '.dbg.strings':
          section.bin = this.smxfile.debugNames;
          break;
        case '.dbg.info':
          section.bin = this.smxfile.debugInfo;
          break;
        case 'rtti.data':
          section.bin = this.smxfile.rttiData;
          break;
        case 'rtti.classdefs':
          section.bin = this.smxfile.rttiClassDefs;
          break;
        case 'rtti.fields':
          section.bin = this.smxfile.rttiFields;
          break;
        case 'rtti.enums':
          section.bin = this.smxfile.rttiEnums;
          break;
        case 'rtti.enumstructs':
          section.bin = this.smxfile.rttiEnumStructs;
          break;
        case 'rtti.enumstruct_fields':
          section.bin = this.smxfile.rttiEnumStructFields;
          break;
        case 'rtti.natives':
          section.bin = this.smxfile.rttiNatives;
          break;
        case 'rtti.methods':
          section.bin = this.smxfile.rttiMethods;
          break;
        case 'rtti.typedefs':
          section.bin = this.smxfile.rttiTypedefs;
          break;
        case 'rtti.typesets':
          section.bin = this.smxfile.rttiTypesets;
          break;
        case '.dbg.methods':
          section.bin = this.smxfile.debugMethods;
          break;
        case '.dbg.globals':
          section.bin = this.smxfile.debugGlobals;
          break;
        case '.dbg.locals':
          section.bin = this.smxfile.debugLocals;
          break;
        default:
          break;
      }

      sections.push(section);
    }
    return sections;
  }
}
