import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-section-byteview',
  templateUrl: './data-section-byteview.component.html',
  styleUrls: ['./data-section-byteview.component.scss']
})
export class DataSectionByteviewComponent implements OnInit {

  @Input() data: Uint8Array;
  private bytes;

  constructor() { }

  ngOnInit() {
  }

  public getBytes() {
    // Only compute this view once.
    if (this.bytes) {
      return this.bytes;
    }

    this.bytes = [];
    let row = [];
    let rowStart = 0;
    for (let i = 0; i < this.data.length; i++) {
      row.push(this.data[i]);

      // Split the data into 16 byte chunks.
      if (row.length === 16) {
        this.bytes.push({'offset': rowStart, 'bytes': row});
        row = [];
        rowStart += 16;
      }
    }
    // Add the rest of the bytes.
    if (row.length > 0) {
      this.bytes.push({'offset': rowStart, 'bytes': row });
    }

    return this.bytes;
  }

  isNumber(val) {
    return typeof val === 'number';
  }
}
