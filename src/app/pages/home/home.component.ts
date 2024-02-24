import { Component, HostListener, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products!: Product[];
  cols: number = 3;
  colspans: number[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onCalculatedColspan(colspan: number, index: number) {
    this.colspans[index] = colspan;
  }

  getGridColumnEnd(index: number): string {
    return `span ${this.colspans[index]}`;
  }

}
