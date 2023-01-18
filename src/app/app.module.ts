import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ShowPipe } from './show.pipe';
import { CityComponent } from './city/city.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShopComponent } from './shop/shop.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './highlight.directive';
import { ServiceComponent } from './service/service.component';
import { ModelComponent } from './model/model/model.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { InputComponent } from './input-output/input/input.component';
import { OutputComponent } from './input-output/output/output.component';
import { FormAngularComponent } from './form-angular/form-angular.component';
import { ValidateComponent } from './validate/validate.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ShowPipe,
    CityComponent,
    PageNotFoundComponent,
    ShopComponent,
    Page1Component,
    Page2Component,
    DirectivesComponent,
    HighlightDirective,
    ServiceComponent,
    ModelComponent,
    InputOutputComponent,
    InputComponent,
    OutputComponent,
    FormAngularComponent,
    ValidateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
