import { Component } from '@angular/core';
import {FileManagerService} from "../file-manager.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public fileManagerService : FileManagerService) {
  }
}
