import { Pipe, PipeTransform } from '@angular/core';
import { RttiClassDefEntry, ClassDefFlagsType } from 'sourcepawn-disassembler/lib/types';

@Pipe({
  name: 'classdefFlagsAsString'
})
export class ClassdefFlagsAsStringPipe implements PipeTransform {

  transform(value: number): string {
    const content = [];
    const type = value & RttiClassDefEntry.TypeMask;
    if (type === ClassDefFlagsType.Struct) {
      content.push('Type: Struct');
    }
    return content.join(', ');
  }

}
