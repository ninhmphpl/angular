import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginFirebaseComponent} from "./login-firebase/login-firebase.component";

const routes: Routes = [
  {path:"login",component:LoginFirebaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
