import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CarritoItem, CarritoState } from '../../store/carrito/carrito.state';
import { removeFromCart, updateQuantity } from '../../store/carrito/carrito.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  carrito$: Observable<CarritoItem[]>;

  constructor(private store: Store<{ carrito: CarritoState }>) {
    this.carrito$ = store.select(state => state.carrito.items);
  }

  removeFromCart(item: CarritoItem) {
    this.store.dispatch(removeFromCart({ producto: item.producto }));
  }

  updateQuantity(item: CarritoItem, change: number) {
    this.store.dispatch(updateQuantity({ producto: item.producto, cantidad: change }));
  }

  getTotal(): number {
    let total = 0;
    this.carrito$.subscribe(items => {
      total = items.reduce((sum, item) => sum + (item.producto.precio * item.cantidad), 0);
    }).unsubscribe();
    return total;
  }

  checkout() {
    alert(`Total a pagar: $${this.getTotal().toFixed(2)}`);
    // Aquí puedes añadir lógica adicional para procesar el pago
  }

  continueShopping() {
    // Implementar la lógica para continuar comprando
    // Por ejemplo, navegar a la página de productos
  }
}
