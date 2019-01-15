import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toHex'
})
export class ToHexPipe implements PipeTransform {

  transform(value: number): string {
    return (value < 16 ? '0' : '') + value.toString(16);
  }

}
