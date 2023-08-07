import {Component, OnInit} from '@angular/core';
import {FirebaseAuthenticationService} from "./firebase-authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'source';
  constructor(public authentication : FirebaseAuthenticationService) {
  }

  ngOnInit(): void {
  }
}
