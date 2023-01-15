import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {
  public name = 'ninh';
  public age = 20;
  public cars = ['mec', 'audi', 'posrse']
  public games = [
    {
      name: "gta",
      price: 1000
    },
    {
      name: "pubg",
      price: 400
    },
    {
      name: "rok",
      price: 200
    }
  ]
  constructor() {
  }
  public resetName(): void {
    alert("reset complete");
    this.name = "";
  }

}
