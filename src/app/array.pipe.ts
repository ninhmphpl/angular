import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'array'
})
export class ArrayPipe implements PipeTransform {

  transform(value: any[]): string {
    if(value == null) return ""
    return value.join();
  }

}


