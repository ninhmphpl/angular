import {Component, OnInit} from '@angular/core';
import {ConfigService} from "./config.service";
import {LoginComponent} from "../login/login.component";
import {LoginService} from "../login/login.service";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit{
  constructor(public loginService : LoginService, public configService : ConfigService) {
  }
  ngOnInit(): void {
    this.configService.getConfig()
  }


}
