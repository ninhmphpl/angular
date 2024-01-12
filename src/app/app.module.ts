import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BannerComponent } from './banner/banner.component';
import { StyleComponent } from './style/style.component';
import { SelectBannerComponent } from './banner/select-banner/select-banner.component';
import { VideoComponent } from './video/video.component';
import { VideoStyleComponent } from './video/video-type/video-style.component';
import { SelectVideoStyleComponent } from './video/video-type/select-video-style/select-video-style.component';
import { IntroComponent } from './intro/intro.component';
import {UploadCloudFlareComponent} from "./upload-cloud-flare/upload-cloud-flare.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BannerComponent,
    StyleComponent,
    SelectBannerComponent,
    VideoComponent,
    VideoStyleComponent,
    SelectVideoStyleComponent,
    IntroComponent,
    UploadCloudFlareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
