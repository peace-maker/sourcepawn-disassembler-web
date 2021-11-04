import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toHex'
})
export class ToHexPipe implements PipeTransform {

  transform(value: number, padding: number = 1): string {
    // Hack to let javascript handle negative number correctly.
    let hex = (value >>> 0).toString(16);
    hex = (hex.length % 2 ? '0' : '') + hex
    return '00'.repeat(Math.max(0, padding - hex.length / 2)) + hex;
  }

}
