import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModelComponent} from "./model/model.component";
import {FilterComponent} from "./filter/filter.component";
import {TypeComponent} from "./type/type.component";
import {AudioComponent} from "./audio/audio.component";
import {SessionComponent} from "./session/session.component";

const routes: Routes = [
  {path:"model",component:ModelComponent},
  {path:"filter",component:FilterComponent},
  {path:"type",component:TypeComponent},
  {path:"session",component:SessionComponent},
  {path:"audio",component:AudioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
