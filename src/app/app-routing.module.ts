import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {Sound2Component} from "./sound2/sound2.component";

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"sound2",component:Sound2Component},
  {path:"",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
