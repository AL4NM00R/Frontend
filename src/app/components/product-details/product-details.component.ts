import { Component, Input } from '@angular/core';
import { Producto } from '../../models/producto';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { addToCart } from '../../store/carrito/carrito.actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() producto!: Producto;

  constructor(private store: Store<AppState>) {}

  addToCart() {
    this.store.dispatch(addToCart({ producto: this.producto }));
    alert(`${this.producto.nombre} ha sido añadido al carrito.`);
  }

  continueShopping() {
    document.getElementById('productos')!.style.display = 'block';
    document.getElementById('product-details')!.style.display = 'none';
    this.producto = null!;
  }
}
