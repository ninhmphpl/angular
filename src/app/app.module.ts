import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmojiComponent } from './emoji/emoji.component';
import { DataEmojiComponent } from './data-emoji/data-emoji.component';
import { Sound2Component } from './sound2/sound2.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { UnicodePipe } from './unicode.pipe';
import { LoginComponent } from './login/login.component';
import { IconEmojiComponent } from './icon-emoji/icon-emoji.component';
import { Dataemoji2Component } from './dataemoji2/dataemoji2.component';
import { EmojiTalkComponent } from './emoji-talk/emoji-talk.component';
import {ArrayPipe} from "./array.pipe";
import { EmojiFrameComponent } from './emoji-frame/emoji-frame.component';
import { IosIconComponent } from './ios-icon/ios-icon.component';
import { IosDataEmojiComponent } from './ios-data-emoji/ios-data-emoji.component';
import { IosEmojiTalkComponent } from './ios-emoji-talk/ios-emoji-talk.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EmojiComponent,
    DataEmojiComponent,
    Sound2Component,
    UnicodePipe,
    LoginComponent,
    IconEmojiComponent,
    Dataemoji2Component,
    EmojiTalkComponent,
    ArrayPipe,
    EmojiFrameComponent,
    IosIconComponent,
    IosDataEmojiComponent,
    IosEmojiTalkComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
