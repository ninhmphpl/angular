import {Component, OnInit} from '@angular/core';
import {FileInfoService} from "./file-info.service";
import {LoginComponent} from "../login/login.component";
import {LoginService} from "../login/login.service";

@Component({
  selector: 'app-file-info',
  templateUrl: './file-info.component.html',
  styleUrls: ['./file-info.component.scss']
})
export class FileInfoComponent implements OnInit{
  constructor(public loginService : LoginService, public fileInfoService : FileInfoService) {
  }
  ngOnInit(): void {
    this.fileInfoService.get("/")
  }

}
