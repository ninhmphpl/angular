import { Component } from '@angular/core';
import {APIService} from "../service/api.service";
import {Router} from "@angular/router";
import {successAlert} from "../environments";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  display = "emoji"
  constructor(private router: Router) {
  }
  backLogin() {
    this.router.navigate(["/login"])
    successAlert("Logout Complete")
  }



}
