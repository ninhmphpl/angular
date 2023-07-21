import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: unknown): unknown {
    switch (value){
      case "zip" :
        return "https://cdn-icons-png.flaticon.com/512/2818/2818715.png"
      case "jpg":
      case "webp":
      case "jpeg":
      case "png":
        return "https://cdn-icons-png.flaticon.com/512/2659/2659360.png"
      case "folder" :
        return "https://cdn-icons-png.flaticon.com/512/1379/1379905.png"
      default :
        return "https://cdn-icons-png.flaticon.com/512/2965/2965335.png"
    }
  }

}
