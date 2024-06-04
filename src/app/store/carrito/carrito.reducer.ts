import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart, clearCart } from './carrito.actions';
import { CarritoState, initialState } from './carrito.state';

export const carritoReducer = createReducer(
  initialState,
  on(addToCart, (state, { producto }) => {
    const item = state.items.find(i => i.producto.nombre === producto.nombre);
    if (item) {
      return {
        ...state,
        items: state.items.map(i =>
          i.producto.nombre === producto.nombre ? { ...i, cantidad: i.cantidad + 1 } : i
        )
      };
    } else {
      return {
        ...state,
        items: [...state.items, { producto, cantidad: 1 }]
      };
    }
  }),
  on(removeFromCart, (state, { producto }) => {
    return {
      ...state,
      items: state.items.filter(i => i.producto.nombre !== producto.nombre)
    };
  }),
  on(clearCart, state => {
    return {
      ...state,
      items: []
    };
  })
);
