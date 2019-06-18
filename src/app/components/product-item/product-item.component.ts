import {Component, Input} from '@angular/core';
import { Product } from '../../services/product-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auction-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product: Product;

  constructor(private _route: Router) {
  }

  addDetailsProduct(product) {
    this._route.navigate(['product-details', product.id]);
  }
}
