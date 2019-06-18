import { ProductService, Product } from './../../../services/product-service';
import { SearchData } from './../../search/search.component';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {

  public searchProducts: Product | Product[] | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(async query => {
      this.searchProducts = await this.productService.getProductsByParam(query);
      console.log(this.searchProducts);
    });
  }

}
