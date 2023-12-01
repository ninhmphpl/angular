import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ImgUploadComponent} from "./img-upload/img-upload.component";
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { TrendingComponent } from './trending/trending.component';
import { TredingTypeComponent } from './treding-type/treding-type.component';
import { MusicComponent } from './music/music.component';
import { StyleTextComponent } from './style-text/style-text.component';
import { StyleImageComponent } from './style-image/style-image.component';
import { UploadMultipleComponent } from './upload-multiple/upload-multiple.component';
import { UploadFtpComponent } from './upload-ftp/upload-ftp.component';
import { FormIconComponent } from './form-icon/form-icon.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgUploadComponent,
    LoginComponent,
    TrendingComponent,
    TredingTypeComponent,
    MusicComponent,
    StyleTextComponent,
    StyleImageComponent,
    UploadMultipleComponent,
    UploadFtpComponent,
    FormIconComponent,
    QuestionComponent
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
