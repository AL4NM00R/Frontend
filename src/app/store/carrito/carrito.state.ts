import { CarritoItem } from '../../models/carrito-item';

export interface CarritoState {
  items: CarritoItem[];
}

export const initialState: CarritoState = {
  items: []
};
