import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

const MAX_COLUMN_WIDTH = 320;

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  @Input() product!: Product;

  colspan: number = 1;
  @Output() calculatedColspan = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  calculateColSpan(event: Event) {
    const imageWidth = (event.target as HTMLImageElement).naturalWidth;
    this.colspan = Math.ceil(imageWidth / MAX_COLUMN_WIDTH);
    this.calculatedColspan.emit(this.colspan);
  }
}
