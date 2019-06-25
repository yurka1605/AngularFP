import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationComponent } from './components/application/application.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { SearchComponent } from './components/search/search.component';
import { StarsComponent } from './components/stars/stars.component';
import { _404NotFoundComponent } from './components/404NotFound/404NotFound.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-item/product-details/product-details.component';
import { ProductSearchComponent } from './components/product-item/product-search/product-search.component';
import { PrivateChatComponent } from './components/private-chat/private-chat.component';

import { ProductService } from './services/product.service';
import { ChatsService } from './services/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    HomeComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    ProductItemComponent,
    ProductDetailComponent,
    SearchComponent,
    StarsComponent,
    _404NotFoundComponent,
    ProductSearchComponent,
    PrivateChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ProductService,
    ChatsService,
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    },
    Title,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
