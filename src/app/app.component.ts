import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AvatarServiceService} from "./avatar-service.service";

declare var YT: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  @ViewChild('youtubeIframe') youtubeIframe!: ElementRef;
  private player: any; // Đối tượng player của YouTube
  constructor(private avatarService : AvatarServiceService) {
  }

  ngOnInit(): void {
    this.avatarService.get()
  }

  ngAfterViewInit() {
    // Khởi tạo player sau khi thẻ iframe đã được hiển thị
    this.initYouTubePlayer();
  }

  initYouTubePlayer() {
    const iframe = this.youtubeIframe.nativeElement;
    const videoId = 'hBY-Dan4wsY'; // Thay thế VIDEO_ID bằng ID của video YouTube của bạn

    this.player = new YT.Player(iframe, {
      videoId: videoId,
      events: {
        'onReady': this.onPlayerReady.bind(this),
      },
    });
  }

  onPlayerReady(event : any) {
    // Đối tượng player đã sẵn sàng
    // Bạn có thể điều khiển video tại đây nếu cần
  }

  playVideo() {
    if (this.player) {
      this.player.playVideo();
    }
  }
}
