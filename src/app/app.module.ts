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
import { HomeComponent } from './home/home.component';
import { IconEmojiComponent } from './icon-emoji/icon-emoji.component';
import { Dataemoji2Component } from './dataemoji2/dataemoji2.component';
import { EmojiTalkComponent } from './emoji-talk/emoji-talk.component';
import {ArrayPipe} from "./array.pipe";

@NgModule({
  declarations: [
    AppComponent,
    EmojiComponent,
    DataEmojiComponent,
    Sound2Component,
    UnicodePipe,
    LoginComponent,
    HomeComponent,
    IconEmojiComponent,
    Dataemoji2Component,
    EmojiTalkComponent,
    ArrayPipe
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
