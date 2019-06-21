import { Component, Input } from '@angular/core';
import { Product } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auction-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product: Product;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  addDetailsProduct(product) {
    this.router.navigate(['product-details', product.id], { relativeTo: this.route });
  }
}
