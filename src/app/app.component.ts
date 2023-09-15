import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AvatarServiceService} from "./avatar-service.service";

declare var YT: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild('youtubeIframe') youtubeIframe!: ElementRef;
  private player: any; // Đối tượng player của YouTube
  constructor(private avatarService : AvatarServiceService) {
  }

  ngOnInit(): void {
    this.avatarService.get()
  }
}
