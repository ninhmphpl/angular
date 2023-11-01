import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ImgUploadComponent} from "./img-upload/img-upload.component";
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CategoryComponent } from './category/category.component';
import { WallPaperComponent } from './wall-paper/wall-paper.component';
import { ThemeComponent } from './theme/theme.component';
import { SelectIconComponent } from './select-icon/select-icon.component';
import { IconComponent } from './icon/icon.component';
import { App2Component } from './app2/app2.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgetTypeComponent } from './widget-type/widget-type.component';
import { SelectWidgetComponent } from './select-widget/select-widget.component';
import { TemplateComponent } from './template/template.component';
import { StyleComponent } from './style/style.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgUploadComponent,
    LoginComponent,
    CategoryComponent,
    WallPaperComponent,
    ThemeComponent,
    SelectIconComponent,
    IconComponent,
    App2Component,
    WidgetComponent,
    WidgetTypeComponent,
    SelectWidgetComponent,
    TemplateComponent,
    StyleComponent,
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
