import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DownloadAndroidAppComponent} from "./download-android-app/download-android-app.component";

const routes: Routes = [
  {path:"app",component:DownloadAndroidAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
