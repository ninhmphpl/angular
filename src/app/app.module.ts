import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { TemplateComponent } from './template/template.component';
import {HttpClientModule} from "@angular/common/http";
import {ImgUploadComponent} from "./upload/img-upload/img-upload.component";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    TemplateComponent,
    ImgUploadComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
