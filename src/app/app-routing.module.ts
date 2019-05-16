import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApplicationComponent} from "./components/application/application.component";
import {ProductItemComponent} from "./components/product-item/product-item.component";
import {_404NotFoundComponent} from "./components/404NotFound/404NotFound.component";

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent
  },
  {
    path: '/product-item',
    component: ProductItemComponent
  },
  {path: '**', component: _404NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
