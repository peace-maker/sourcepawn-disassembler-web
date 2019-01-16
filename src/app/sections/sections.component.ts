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
        case '.dbg.files':
          section.bin = this.smxfile.debugFiles;
          break;
        case '.dbg.lines':
          section.bin = this.smxfile.debugLines;
          break;
        case '.dbg.natives':
          section.bin = this.smxfile.debugNatives;
          break;
        case '.dbg.strings':
          section.bin = this.smxfile.debugNames;
          break;
        case '.dbg.info':
          section.bin = this.smxfile.debugInfo;
          if (section.bin) {
            const debugInfo = this.smxfile.debugInfo as SmxDebugInfoSection;
            section.hasDropdown = true;
            section.dropdown = [];
            section.dropdown.push('num_files = ' + debugInfo.numFiles.toString());
            section.dropdown.push('num_lines = ' + debugInfo.numLines.toString());
            section.dropdown.push('num_symbols = ' + debugInfo.numSymbols.toString());
            section.dropdown.push('num_arrays = ' + debugInfo.numArrays.toString());
          }
          break;

        default:
          break;
      }

      sections.push(section);
    }
    return sections;
  }
}
