import {Component, Input} from '@angular/core';
import { StarsComponent } from '../stars/stars';
import { Product } from '../../services/product-service';

@Component({
  selector: 'auction-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product: Product;
}
