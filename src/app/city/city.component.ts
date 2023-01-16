import { Component } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent {
  public districts = []
  public citys = [
    {
      city: {
        name: "ha noi"
      },
      distric: [
        {
          name: "ba vi"
        },
        {
          name: "nam tu liem"
        }
      ]
    },
    {
      city: {
        name: "hoa binh"
      },
      distric:[
        {
          name: "lac thuy"
        },
        {
          name: "lac son"
        }
      ]
    }
  ]
  public change(even:any) {
    console.log("ok");
    console.log(even.target);
    console.log(even.target.value);
    
  }
}
