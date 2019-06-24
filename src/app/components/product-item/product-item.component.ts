import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auction-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {

  public imageColor: string;
  @Input() product: Product;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const r = Math.floor(Math.random() * (256));
    const g = Math.floor(Math.random() * (256));
    const b = Math.floor(Math.random() * (256));
    this.imageColor = r.toString(16) + g.toString(16) + b.toString(16);
  }

  addDetailsProduct(product) {
    this.router.navigate(['product-details', product.id], { relativeTo: this.route });
  }
}
