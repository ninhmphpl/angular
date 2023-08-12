import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFirebaseComponent } from './login-firebase/login-firebase.component';
import {HttpClientModule} from "@angular/common/http";
import { FirebaseMessageComponent } from './firebase-message/firebase-message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFirebaseComponent,
    FirebaseMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
