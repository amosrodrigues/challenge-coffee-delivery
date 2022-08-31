import { Item, OrderData } from './reducer'

export enum ActionsType {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_OF_CART = 'REMOVE_ITEM_OF_CART',
  INCREASE_AMOUNT_ITEM = 'INCREASE_AMOUNT_ITEM',
  DECREASE_AMOUNT_ITEM = 'DECREASE_AMOUNT_ITEM',
  SHOULD_EMPTY_CART = 'SHOULD_EMPTY_CART',
  GENERATE_ORDER = 'GENERATE_ORDER',
}

export function addItemToCartAction(item: Item) {
  return {
    type: ActionsType.ADD_ITEM_TO_CART,
    payload: {
      item,
    },
  }
}

export function removeItemOfCartAction(id: number) {
  return {
    type: ActionsType.REMOVE_ITEM_OF_CART,
    payload: {
      id,
    },
  }
}

export function increaseAmountItemAction(id: number) {
  return {
    type: ActionsType.INCREASE_AMOUNT_ITEM,
    payload: {
      id,
    },
  }
}

export function decreaseAmountItemAction(id: number) {
  return {
    type: ActionsType.DECREASE_AMOUNT_ITEM,
    payload: {
      id,
    },
  }
}

export function shouldEmptyCartAction() {
  return {
    type: ActionsType.SHOULD_EMPTY_CART,
  }
}

export function generateOrderAction(order: OrderData) {
  return {
    type: ActionsType.GENERATE_ORDER,
    payload: {
      order,
    },
  }
}
