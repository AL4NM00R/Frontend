import { Injectable } from '@angular/core';

// Define una interfaz para describir la estructura de los productos
export interface Product {
  name: string;
  price: number;
  quantity?: number; // La cantidad es opcional porque puede no estar definida inicialmente
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = []; // Utiliza la interfaz Product en lugar de 'any'

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }
}
