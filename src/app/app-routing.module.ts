import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaltComponent } from './detalt/detalt.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path: "detalt/:id", component: DetaltComponent},
  {path: "", component: HomeComponent},
  {path: "*", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
