import { Component } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent {
  public districs :any[]= [{name: "Quan/Huyen"}]
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
    let abc = this.citys.filter((data) => data.city.name === even.target.value)
    this.districs = abc[0].distric;
    console.log(this.districs);
    
    
  }
}
