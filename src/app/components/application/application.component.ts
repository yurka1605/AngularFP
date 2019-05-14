import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'auction-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],

  encapsulation: ViewEncapsulation.None
})
export class ApplicationComponent {
  products: Product[] = [];

  constructor(private ProductService: ProductService){
      this.products = this.ProductService.getProducts();
  }
}
