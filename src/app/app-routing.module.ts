import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ThemeComponent} from "./theme/theme.component";
import {CategoryComponent} from "./category/category.component";
import {AiPosterComponent} from "./ai-poster/ai-poster.component";
import {AiProfileComponent} from "./ai-profile/ai-profile.component";
import {TemplateComponent} from "./template/template.component";

const routes: Routes = [
  {path:"theme",component:ThemeComponent},
  {path:"category",component:CategoryComponent},
  {path:"ai-poster",component:AiPosterComponent},
  {path:"ai-profile",component:AiProfileComponent},
  {path:"template",component:TemplateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
