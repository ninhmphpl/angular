import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { FormAngularComponent } from './form-angular/form-angular.component';
import { HelloComponent } from './hello/hello.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { OutputComponent } from './input-output/output/output.component';
import { ModelComponent } from './model/model/model.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceComponent } from './service/service.component';
import { ShopComponent } from './shop/shop.component';
import { ValidateComponent } from './validate/validate.component';


const routes: Routes = [
  {path: "", component: HelloComponent},
  {path: "shop", component: ShopComponent},
  {path: "directives", component: DirectivesComponent},
  {path: "service", component: ServiceComponent},
  {path: "model", component: ModelComponent},
  {path: "input-output", component: InputOutputComponent},
  {path: "form-angular", component: FormAngularComponent},
  {path: "validate", component: ValidateComponent},
  {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
