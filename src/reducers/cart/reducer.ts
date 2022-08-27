import produce from 'immer';
import { ActionsType } from './actions';

export interface Item {
  id: number;
  type: string;
  thamb: string;
  description: string;
  category: string[];
  price: number;
  quantity: number;
}

export interface OrderData {
  cep: string;
  street: string;
  streetNumber: string;
  complement?: string;
  district: string;
  city: string;
  uf: string;
  paymentType: 'credit' | 'debit' | 'money';
}

export interface Order extends OrderData {
  id: string;
  orderDate: Date;
}

interface CartState {
  cart: Item[];
  order: OrderData;
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionsType.ADD_ITEM_TO_CART:
      return produce(state, (draft) => {
        draft.cart.push(action.payload.item);
      });

    case ActionsType.REMOVE_ITEM_OF_CART:
      return produce(state, (draft) => {
        const currentItemIndex = state.cart.findIndex(
          (item) => item.id === action.payload.id,
        );

        if (currentItemIndex < 0) {
          return state;
        }

        draft.cart.splice(currentItemIndex, 1);
      });

    case ActionsType.INCREASE_AMOUNT_ITEM:
      return produce(state, (darft) => {
        const item = darft.cart.find((item) => item.id === action.payload.id);
        item && item.quantity++;
      });

    case ActionsType.DECREASE_AMOUNT_ITEM:
      return produce(state, (darft) => {
        const item = darft.cart.find((item) => item.id === action.payload.id);
        item && item.quantity > 1 && item.quantity--;
      });

    case ActionsType.SHOULD_EMPTY_CART:
      return produce(state, (draft) => {
        draft.cart = [];
      });

    case ActionsType.GENERATE_ORDER:
      return produce(state, (draft) => {
        draft.order = action.payload.order;
      });

    default:
      return state;
  }
}
