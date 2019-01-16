import { Pipe, PipeTransform } from '@angular/core';
import { SymScope } from 'sourcepawn-disassembler/lib/types/symscope';

@Pipe({
  name: 'symScopeAsString'
})
export class SymScopeAsStringPipe implements PipeTransform {

  transform(value: SymScope): string {
    return SymScope[value].toString();
  }

}
