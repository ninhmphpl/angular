import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { NavComponent } from './home/nav/nav.component';
import { MainComponent } from './home/main/main.component';
import { FooterComponent } from './home/footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetaltComponent } from './detalt/detalt.component';
import { RatingStarComponent } from './rating-star/rating-star.component';
import { StarPercenComponent } from './rating-star/star-percen/star-percen.component';
import { FormsModule } from '@angular/forms';
import { ImgComponent } from './detalt/img/img.component';
import { ControllerPageComponent } from './home/main/controller-page/controller-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    PageNotFoundComponent,
    DetaltComponent,
    RatingStarComponent,
    StarPercenComponent,
    ImgComponent,
    ControllerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
