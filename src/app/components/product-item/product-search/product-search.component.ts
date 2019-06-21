import { Title } from '@angular/platform-browser';
// import { DoCheck } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product } from '../../../services/product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {

  public searchProducts: Product[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private titleService: Title,
    ) {
    }

  ngOnInit() {
    this.searchProducts = this.productService.getProductsByParam(this.route.snapshot.queryParams);
    const currentTitle = this.titleService.getTitle();
    this.titleService.setTitle( `${ currentTitle } | search` );
  }

  // ngDoCheck() {
  //   this.router.events.subscribe(_ => {
  //     this.searchProducts = this.productService.getProductsByParam(this.route.snapshot.queryParams);
  //   });
  // }
}
