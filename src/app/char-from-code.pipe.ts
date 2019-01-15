import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charFromCode'
})
export class CharFromCodePipe implements PipeTransform {

  transform(value: number, useDots?: boolean): string {
    if (useDots && (value < 0x20 || value > 0x7f)) {
      return '.';
    }
    return String.fromCharCode(value);
  }

}
