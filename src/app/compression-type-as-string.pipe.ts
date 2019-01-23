import { Pipe, PipeTransform } from '@angular/core';
import { CompressionType } from 'sourcepawn-disassembler';

@Pipe({
  name: 'compressionTypeAsString'
})
export class CompressionTypeAsStringPipe implements PipeTransform {

  transform(value: CompressionType): string {
    return CompressionType[value].toString();
  }

}
