import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ImgUploadComponent} from "./img-upload/img-upload.component";
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CategoryComponent } from './category/category.component';
import { ThemeComponent } from './theme/theme.component';
import { AiPosterComponent } from './ai-poster/ai-poster.component';
import { AiProfileComponent } from './ai-profile/ai-profile.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgUploadComponent,
    LoginComponent,
    CategoryComponent,
    ThemeComponent,
    AiPosterComponent,
    AiProfileComponent,
    TemplateComponent,
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
