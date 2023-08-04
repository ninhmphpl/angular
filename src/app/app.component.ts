import {Component, OnInit} from '@angular/core';
import {FirebaseAthenService} from "./firebase-athen.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'source';
  constructor(public authentication : FirebaseAthenService) {
  }

  ngOnInit(): void {
    this.authentication.config()
  }
}
