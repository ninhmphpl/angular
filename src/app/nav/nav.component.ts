import {Component, OnInit} from '@angular/core';
import {FileManagerService} from "../file-manager.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  constructor(public fileMangerService : FileManagerService) {
  }
  ngOnInit(): void {
  }

}
