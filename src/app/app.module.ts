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
import { SourceImgComponent } from './source-img/source-img.component';
import {LoginComponent} from "./login/login.component";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {environment} from "../../environment/environments";
import { SelectCategoryComponent } from './select-category/select-category.component';
import { SelectSourceComponent } from './select-source/select-source.component';

@NgModule({
    declarations: [
        AppComponent,
        ThemeComponent,
        CategoryComponent,
        StickerComponent,
        CallIconComponent,
        ImgUploadComponent,
        SourceImgComponent,
        LoginComponent,
        SelectCategoryComponent,
        SelectSourceComponent
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
