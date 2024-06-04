import { ActionReducerMap } from '@ngrx/store';
import { carritoReducer } from './carrito/carrito.reducer';
import { CarritoState } from './carrito/carrito.state';

export interface AppState {
  carrito: CarritoState;
}

export const appReducers: ActionReducerMap<AppState> = {
  carrito: carritoReducer
};
