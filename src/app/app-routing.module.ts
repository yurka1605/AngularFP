import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApplicationComponent} from "./components/application/application.component";
import {ProductItemComponent} from "./components/product-item/product-item.component";

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent
  },
  {
    path: '/product-item',
    component: ProductItemComponent
  },
  {path: '**', component: _404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
