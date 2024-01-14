import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ThemeComponent} from './theme/theme.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CategoryComponent} from './category/category.component';
import {StickerComponent} from './sticker/sticker.component';
import {CallIconComponent} from './call-icon/call-icon.component';
import {SourceImgComponent} from './source-img/source-img.component';
import {LoginComponent} from "./login/login.component";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {environment} from "./environments";
import {SelectCategoryComponent} from './select-category/select-category.component';
import {SelectSourceComponent} from './source-img/select-source/select-source.component';
import {BackgroundComponent} from './background/background.component';
import {Background2Component} from './background2/background2.component';
import {SelectBackgroundComponent} from './background2/select-background/select-background.component';
import {SelectCallIconComponent} from './call-icon/select-call-icon/select-call-icon.component';
import {UploadCloudFlareComponent} from "./upload-cloud-flare/upload-cloud-flare.component";

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    CategoryComponent,
    StickerComponent,
    CallIconComponent,
    SourceImgComponent,
    LoginComponent,
    SelectCategoryComponent,
    SelectSourceComponent,
    BackgroundComponent,
    Background2Component,
    SelectBackgroundComponent,
    SelectCallIconComponent,
    UploadCloudFlareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
