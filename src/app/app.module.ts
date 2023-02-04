import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire/compat';
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { NavRightComponent } from './nav-right/nav-right.component';
import { HomeComponent } from './home/home.component';
import { ProdutComponent } from './produt/produt.component';
import { HttpClientModule } from '@angular/common/http';
import { NavProductComponent } from './produt/nav-product/nav-product.component';
import { EditProductComponent } from './produt/edit-product/edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavLeftComponent,
    NavRightComponent,
    HomeComponent,
    ProdutComponent, 
    NavProductComponent, 
    EditProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [
    // { provide: BUCKET, useValue: 'file' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
