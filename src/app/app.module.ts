import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { StyleComponent } from './style/style.component';
import { PaintingComponent } from './painting/painting.component';
import { ImgUploadComponent } from './img-upload/img-upload.component';
import { BannerComponent } from './banner/banner.component';
import { StyleChoiceComponent } from './style/style-choice/style-choice.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleComponent,
    PaintingComponent,
    ImgUploadComponent,
    BannerComponent,
    StyleChoiceComponent
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
