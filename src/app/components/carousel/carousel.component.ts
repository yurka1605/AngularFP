import { ProductService, Product } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auction-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {
  public products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    let products: any = this.productService.getProducts();
    products = products.map(item => {
      const r = Math.floor(Math.random() * (256));
      const g = Math.floor(Math.random() * (256));
      const b = Math.floor(Math.random() * (256));
      item.imageColor = r.toString(16) + g.toString(16) + b.toString(16);
      return item;
    });
    this.products = products;
  }
}
