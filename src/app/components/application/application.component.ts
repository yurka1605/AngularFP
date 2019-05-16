import { Component } from '@angular/core';
import {Product, ProductService} from "../../services/product-service";

@Component({
  selector: 'auction-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
})
export class ApplicationComponent {
  products: Product[] = [];

  constructor(private ProductService: ProductService){
      this.products = this.ProductService.getProducts();
  }
}
