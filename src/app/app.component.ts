import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AvatarServiceService} from "./avatar-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private avatarService : AvatarServiceService) {
  }

  ngOnInit(): void {
    this.avatarService.get()
  }
}
