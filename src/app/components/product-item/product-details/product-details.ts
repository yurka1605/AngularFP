import { ProductService } from './../../../services/product-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-auction-product-page',
    template: `<section style="display: flex; flex-wrap: wrap;">
        <div>
            <h2>{{ currentProduct.title }}</h2>
            <img src="http://placehold.it/{{ 120*(currentProduct.id+1) }}x320">
        </div>
        <div class="descr" style="width: 200px">
            <h4>Aboute product</h4>
            <div>{{ currentProduct.description }}</div>
        </div>
    </section>`
})

export class ProductDetailComponent implements OnInit {
    public currentProduct: any;

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.route.params.subscribe(param => {
            const pramID = {id: parseInt(param.id, 10)};
            this.currentProduct = this.productService.getProductsByParam(pramID);
            if (!this.currentProduct) {
                this.router.navigate(['product-details', param.id, 'not', 'found']);
            }
        });
    }
}
