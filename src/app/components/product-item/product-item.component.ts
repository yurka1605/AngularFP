import {Component, Input, Output} from '@angular/core';
import { Product } from '../../services/product-service';

@Component({
  selector: 'app-auction-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product: Product;
}
