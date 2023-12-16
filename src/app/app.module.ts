import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { MusicComponent } from './music/music.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { VideoTypeComponent } from './video-type/video-type.component';
import { LoginComponent } from './login/login.component';
import {ImgUploadComponent} from "./upload/img-upload/img-upload.component";
import { SelectComponent } from './select/select.component';
import {environment} from "./Environment";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getAuth, provideAuth} from "@angular/fire/auth";

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    MusicComponent,
    VideoTypeComponent,
    LoginComponent,
    ImgUploadComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
