import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

import productData from '../data/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    const products: Product[] = productData.map((product: any, index: number) => {
      return {
        id: index + 1,
        name: product.name,
        detail: product.detail,
        price: parseFloat(product.price),
        hero: product.hero || '',
        imageUrl: product.image
      };
    });

    return products;
  }

}