import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unicode'
})
export class UnicodePipe implements PipeTransform {

  transform(value: string): unknown {
    return '&#x' + value.slice(2,7) + ';';
  }

}


