import {Component, OnInit} from '@angular/core';
import {LoginService} from "./login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(public login : LoginService) {
  }
  ngOnInit(): void {
    this.login.getUser()
  }


}
