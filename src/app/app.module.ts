import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UploadMultipleComponent } from './upload-multiple/upload-multiple.component';
import { UploadCloudFlareComponent } from './upload-cloud-flare/upload-cloud-flare.component';
import { AlphabetRenderComponent } from './alphabet-render/alphabet-render.component';
import { TemplateComponent } from './template/template.component';
import { SoundComponent } from './sound/sound.component';
import { TemplateTypeComponent } from './template-type/template-type.component';
import { ColorComponent } from './color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UploadMultipleComponent,
    UploadCloudFlareComponent,
    AlphabetRenderComponent,
    TemplateComponent,
    SoundComponent,
    TemplateTypeComponent,
    ColorComponent,
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
