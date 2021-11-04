import { Component, Input } from '@angular/core';
import { SourcePawnFile, FileHeader } from 'sourcepawn-disassembler';

@Component({
  selector: 'app-file-header',
  templateUrl: './file-header.component.html',
  styleUrls: ['./file-header.component.scss']
})
export class FileHeaderComponent {

  @Input() smxfile: SourcePawnFile;

  constructor() { }


  get header(): FileHeader {
    return this.smxfile.header;
  }
}
