import { Component } from '@angular/core';
import {Product, ProductService} from '../../services/product-service';

@Component({
  selector: 'app-auction-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {
      this.products = this.productService.getProducts();
  }
}
