import { isIdentifier } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'show'
})
export class ShowPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if(value && value < 18){
      return 'bạn không đủ tuổi'
    }
    return 'bạn đã đủ tuổi';
  }

}
