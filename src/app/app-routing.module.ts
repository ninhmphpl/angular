import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemplateComponent} from "./template/template.component";
import {AlphabetRenderComponent} from "./alphabet-render/alphabet-render.component";
import {SoundComponent} from "./sound/sound.component";
import {TemplateTypeComponent} from "./template-type/template-type.component";

const routes: Routes = [
  {path:"template",component:TemplateComponent},
  {path:"templateType",component:TemplateTypeComponent},
  {path:"alphabet",component:AlphabetRenderComponent},
  {path:"sound",component:SoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
