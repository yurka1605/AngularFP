import { Component, Input } from '@angular/core';
// import { StarsComponent } from '../stars/stars.component';
import { Product } from '../../services/product-service';

@Component({
  selector: 'auction-product-item',
  templateUrl: './product-item.component.html'
})
export class ProductItemComponent {
  @Input() product: Product;
}
