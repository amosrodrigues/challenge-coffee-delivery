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

interface CartState {
  cart: Item[];
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

    default:
      return state;
  }
}
