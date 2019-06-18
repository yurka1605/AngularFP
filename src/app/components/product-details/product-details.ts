import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-auction-product-page',
    template: `<div>
        <img src="http://placehold.it/820x320">
        <h4>{{ productTitle }}</h4>
    </div>`
})

export class ProductDetailComponent {
    productTitle: string;
    constructor(private _route: ActivatedRoute) {
        this._route.params.subscribe(param => this.productTitle = param.id);
    }
}
