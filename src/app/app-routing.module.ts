import { ProductSearchComponent } from './components/product-item/product-search/product-search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { _404NotFoundComponent } from './components/404NotFound/404NotFound.component';
import { ProductDetailComponent } from './components/product-item/product-details/product-details.component';
import { PrivateChatComponent } from './components/private-chat/private-chat.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product-details/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'search',
    component: ProductSearchComponent,
    children: [
      {
        path: 'product-details/:id',
        component: ProductDetailComponent,
      },
    ],
  },
  {
    path: '**',
    component: _404NotFoundComponent
  },
  {
    path: 'chat/private/:id',
    component: PrivateChatComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
