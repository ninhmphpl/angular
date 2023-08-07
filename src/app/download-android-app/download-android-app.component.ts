import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-download-android-app',
  templateUrl: './download-android-app.component.html',
  styleUrls: ['./download-android-app.component.scss']
})
export class DownloadAndroidAppComponent implements OnInit{
  constructor(private router : Router) {
  }
  ngOnInit(): void {
    window.location.assign("https://play.google.com/store/apps/details?id=com.qrart.aiartqrcode.aiqrcodegenerator.stylizeqrcode") // có thể back lại trang trước đó
    // window.location.replace("https://chat.openai.com/") // không thể back lại trang trước đó
    // window.open("https://chat.openai.com/",  "_blank") // không thể back lại trang trước đó
  }

}
