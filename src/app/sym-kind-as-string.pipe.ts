import { Pipe, PipeTransform } from '@angular/core';
import { SymKind } from 'sourcepawn-disassembler/lib/types/symkind';

@Pipe({
  name: 'symKindAsString'
})
export class SymKindAsStringPipe implements PipeTransform {

  transform(value: SymKind): string {
    return SymKind[value].toString();
  }

}
