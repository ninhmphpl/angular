import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit{
  constructor(public api : ApiService) {
  }
  ngOnInit(): void {
    this.api.getQuestion()
  }

}
