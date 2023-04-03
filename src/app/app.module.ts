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

@NgModule({
  declarations: [
    AppComponent,
    EmojiComponent,
    DataEmojiComponent,
    Sound2Component,
    UnicodePipe
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
