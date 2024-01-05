import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UploadMultipleComponent } from './upload-multiple/upload-multiple.component';
import { UploadCloudFlareComponent } from './upload-cloud-flare/upload-cloud-flare.component';
import {GroupComponent} from "./group/group.component";
import {TemplateComponent} from "./template/template.component";
import { MusicComponent } from './music/music.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UploadMultipleComponent,
    UploadCloudFlareComponent,
    GroupComponent,
    TemplateComponent,
    MusicComponent
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
