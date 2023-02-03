import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { NavComponent } from './home/nav/nav.component';
import { MainComponent } from './home/main/main.component';
import { FooterComponent } from './home/footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailComponent } from './detail/detail.component';
import { RatingStarComponent } from './rating-star/rating-star.component';
import { StarPercenComponent } from './rating-star/star-percen/star-percen.component';
import { FormsModule } from '@angular/forms';
import { ImgComponent } from './detail/img/img.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    PageNotFoundComponent,
    DetailComponent,
    RatingStarComponent,
    StarPercenComponent,
    ImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
