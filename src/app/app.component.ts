import { Component } from '@angular/core';
import {loadEsmModule} from "@angular-devkit/build-angular/src/utils/load-esm";
import {LoginService} from "./login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  choice : string = "config"
  constructor(public login : LoginService) {
  }
}
