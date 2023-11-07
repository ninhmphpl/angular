import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-template',
  templateUrl: './ai-profile.component.html',
  styleUrls: ['./ai-profile.component.scss']
})
export class AiProfileComponent implements OnInit {
  constructor(public api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getAiProfile()
    this.api.getCategory("ai-profile")
  }

}
