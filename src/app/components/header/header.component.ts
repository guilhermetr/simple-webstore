import { Component, Input, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  cart!: Cart;
  cartItemQuantity = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
      this.cartItemQuantity = _cart.items
        .reduce((total, item) => total + item.quantity, 0);
    });
  }

  getItemsPrice(items: CartItem[]): number {
    return this.cartService.getItemsPrice(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }
}
