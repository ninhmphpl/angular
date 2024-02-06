import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AudioComponent} from './audio/audio.component';
import {ModelComponent} from './model/model.component';
import {TypeComponent} from './type/type.component';
import {FilterComponent} from './filter/filter.component';
import {UploadMultipleComponent} from "./upload-multiple/upload-multiple.component";
import { SessionComponent } from './session/session.component';
import {UploadCloudFlareComponent} from "./upload-cloud-flare/upload-cloud-flare.component";

@NgModule({
  declarations: [
    AppComponent,
    UploadCloudFlareComponent,
    LoginComponent,
    AudioComponent,
    ModelComponent,
    TypeComponent,
    FilterComponent,
    UploadMultipleComponent,
    SessionComponent,
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
export class AppModule {
}
