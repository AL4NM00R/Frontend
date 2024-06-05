import { createAction, props } from '@ngrx/store';
import { Producto } from '../../models/producto';

export const addToCart = createAction(
  '[Carrito] Añadir al carrito',
  props<{ producto: Producto }>()
);

export const removeFromCart = createAction(
  '[Carrito] Eliminar del carrito',
  props<{ producto: Producto }>()
);

export const clearCart = createAction('[Cart] Clear Cart');

export const updateQuantity = createAction(
  '[Cart] Update Quantity',
  props<{ producto: any, cantidad: number }>()
);

