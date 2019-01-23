import { Component, OnInit, Input } from '@angular/core';
import { SourcePawnFile, FileHeader } from 'sourcepawn-disassembler';

@Component({
  selector: 'app-file-header',
  templateUrl: './file-header.component.html',
  styleUrls: ['./file-header.component.scss']
})
export class FileHeaderComponent implements OnInit {

  @Input() smxfile: SourcePawnFile;

  constructor() { }

  ngOnInit() {
  }

  get header(): FileHeader {
    return this.smxfile.header;
  }
}
