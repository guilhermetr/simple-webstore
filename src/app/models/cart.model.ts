import { Product } from "./product.model";

export interface Cart {
  items: Array<CartItem>;
}

export interface CartItem {
  id: number;
  product: Product;  
  quantity: number;
}
