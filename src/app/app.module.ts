import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeComponent } from './theme/theme.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { CategoryComponent } from './category/category.component';
import { StickerComponent } from './sticker/sticker.component';
import { CallIconComponent } from './call-icon/call-icon.component';
import {ImgUploadComponent} from "./img-upload/img-upload.component";

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    CategoryComponent,
    StickerComponent,
    CallIconComponent,
    ImgUploadComponent
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
export class AppModule {

}
