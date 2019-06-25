import { Product, ProductService } from '../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatsService, UserChat } from 'src/app/services/chat.service';

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
        private userChats: ChatsService,
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

    loadChat(user: string) {
        user = user.toLocaleLowerCase();
        let currentChat = this.userChats.getPrivate(user);
        if (!currentChat) {
            currentChat = this.createPrivateChat(user);
        }
        this.router.navigate(['chat', 'private', currentChat.id]);
    }

    createPrivateChat(user: string): UserChat {
        return this.userChats.addPrivateChat(user);  
    }
}
