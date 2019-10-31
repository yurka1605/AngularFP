import { ProductService } from '../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class SearchData {
  title: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-auction-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})

export class SearchComponent implements OnInit {
  public category: string[] = [];
  public data: SearchData = new SearchData();
  public departureCity = 'Москва';

  constructor(private productService: ProductService, private router: Router) {
  }
  ngOnInit() {
    const products = this.productService.getProducts();
    products.forEach(item => {
      this.category.push(...item.categories);
    });
    this.category = this.category.filter((item, index) => this.category.indexOf(item) === index);
  }

  goToProduct(data: SearchData): void {
    if (JSON.stringify(data).length > 2) {
      const queryParams = {
        title: data.title,
        price: data.price,
        categories: data.category
      };
      this.router.navigate(['search'], { queryParams });
    }
  }
}
