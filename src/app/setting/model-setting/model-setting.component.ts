import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment";

@Component({
  selector: 'app-model-setting',
  templateUrl: './model-setting.component.html',
  styleUrls: ['./model-setting.component.scss']
})
export class ModelSettingComponent implements  OnInit{
  model: any;
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.getSetting();
  }
  getSetting() {
    this.http.get(environment.apiUrl + "/api/v1/model").subscribe((data) => {
      this.model = data;
      console.table(this.model.entries);
    });
  }
  updateSetting() {
    this.http.post(environment.apiUrl + "/api/v1/model", this.model).subscribe((data) => {
      this.model = data;
      console.table(this.model.entries);
    });
  }
}
