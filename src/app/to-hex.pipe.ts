import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toHex'
})
export class ToHexPipe implements PipeTransform {

  transform(value: number): string {
    // Hack to let javascript handle negative number correctly.
    const hex = (value >>> 0).toString(16);
    return (hex.length % 2 ? '0' : '') + hex;
  }

}
