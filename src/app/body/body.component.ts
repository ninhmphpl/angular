import {Component, OnInit} from '@angular/core';
import {FileManagerService} from "../file-manager.service";
import {environment} from "../../environment/Environmen";
import {Breadcrumb} from "../../model/Breadcrumb";
const url = environment.url
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit{
  constructor(public fileMangerService : FileManagerService) {
  }
  ngOnInit(): void {
    let breadcrumb = new Breadcrumb("Home", url + "/data/v3?d=/");
    this.fileMangerService.breadcrumb.push(breadcrumb)
    this.fileMangerService.getList(breadcrumb.url,()=>{})
  }

}
