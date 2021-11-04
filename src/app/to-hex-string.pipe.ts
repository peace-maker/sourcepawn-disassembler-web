import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toHexString'
})
export class ToHexStringPipe implements PipeTransform {

  // https://stackoverflow.com/questions/40031688/javascript-arraybuffer-to-hex
  transform(value: ArrayBuffer): string {
    return [...new Uint8Array(value)]
        .map(x => x.toString(16).padStart(2, '0'))
        .join('');
  }

}
