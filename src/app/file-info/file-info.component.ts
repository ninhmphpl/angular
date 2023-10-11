import {Component, OnInit} from '@angular/core';
import {FileInfoService} from "./file-info.service";

@Component({
  selector: 'app-file-info',
  templateUrl: './file-info.component.html',
  styleUrls: ['./file-info.component.scss']
})
export class FileInfoComponent implements OnInit{
  constructor(public fileInfoService : FileInfoService) {
  }
  ngOnInit(): void {
    this.fileInfoService.get("/")
  }

}
