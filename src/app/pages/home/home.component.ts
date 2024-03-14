import { Component, HostListener, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products!: Product[];
  colspans: number[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onCalculatedColspan(colspan: number, index: number) {
    this.colspans[index] = colspan;
  }

  onAddToCart(product: Product) {
    this.cartService.addToCart({
      id: product.id,   
      product: product,            
      quantity: 1,
    })
  }
}
