import { Product, ProductService } from '../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-auction-product-page',
    templateUrl: 'product-details.component.html'
})

export class ProductDetailComponent implements OnInit {
    public currentProduct: Product | undefined;

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.route.params.subscribe(param => {
            const pramID = {id: +param.id};
            this.currentProduct = this.productService.getProductsByParam(pramID)[0];
            if (!this.currentProduct) {
                this.router.navigate(['product-details', param.id, 'not', 'found']);
            }
        });
    }

    createPrivateChat(user) {
        let chats = this.userChats.get();
        chats = chats.private.filter(chat => chat.user === user);
        if (chats) {
            this.router.navigate(['chat', 'private', chats[0].id]);
            return;
        }
        // chats[0].id : crypto.getRandomValues(new Uint32Array(1));
    }
}
