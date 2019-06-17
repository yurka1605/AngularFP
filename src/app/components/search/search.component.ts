import { ProductService } from './../../services/product-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auction-search',
  templateUrl: './search.component.html',
  styles: ['.cap{ text-transform: capitalize }'],
})
export class SearchComponent implements OnInit {
  public category: string[] = [];

  constructor(private productService: ProductService) {
  }
  ngOnInit() {
    const products = this.productService.getProducts();
    products.forEach(item => {
      this.category.push(...item.categories);
    });
    this.category = this.category.filter((item, index) => this.category.indexOf(item) === index);
  }
}
