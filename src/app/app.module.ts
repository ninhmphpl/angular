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
import { StyleComponent } from './style/style.component';
import { StyleTextComponent } from './style-text/style-text.component';
import { StyleImageComponent } from './style-image/style-image.component';
import { StickerComponent } from './sticker/sticker.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgUploadComponent,
    LoginComponent,
    TrendingComponent,
    TredingTypeComponent,
    MusicComponent,
    StyleComponent,
    StyleTextComponent,
    StyleImageComponent,
    StickerComponent
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
