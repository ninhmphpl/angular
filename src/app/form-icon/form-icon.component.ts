import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-form-icon',
  templateUrl: './form-icon.component.html',
  styleUrls: ['./form-icon.component.scss']
})
export class FormIconComponent implements OnInit{
  constructor(public api : ApiService) {
  }
  ngOnInit(): void {
    this.api.getFormIcon()
  }

}
