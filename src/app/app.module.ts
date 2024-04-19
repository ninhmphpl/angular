import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelSettingComponent } from './setting/model-setting/model-setting.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ErrorChekingComponent } from './error-cheking/error-cheking.component';
import { TokenCheckingComponent } from './token-checking/token-checking.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelSettingComponent,
    ErrorChekingComponent,
    TokenCheckingComponent
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
