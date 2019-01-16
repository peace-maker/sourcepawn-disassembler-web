import { Pipe, PipeTransform } from '@angular/core';
import { SymKind } from 'sourcepawn-disassembler/lib/types/symkind';

@Pipe({
  name: 'symkindAsString'
})
export class SymkindAsStringPipe implements PipeTransform {

  transform(value: SymKind): string {
    return SymKind[value].toString();
  }

}
