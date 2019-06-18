import { ProductSearchComponent } from './components/product-item/product-search/product-search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { _404NotFoundComponent } from './components/404NotFound/404NotFound.component';
import { ProductDetailComponent } from './components/product-item/product-details/product-details';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product-details/:id',
    component: ProductDetailComponent
  },
  {
    path: 'search',
    component: ProductSearchComponent,
  },
  {
    path: '**',
    component: _404NotFoundComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
