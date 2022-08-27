import { createContext, ReactNode, useEffect, useReducer } from 'react';
import {
  addItemToCartAction,
  decreaseAmountItemAction,
  generateOrderAction,
  increaseAmountItemAction,
  removeItemOfCartAction,
  shouldEmptyCartAction,
} from '../reducers/cart/actions';
import { cartReducer, Item, Order, OrderData } from '../reducers/cart/reducer';

interface ShoppingContextType {
  order: OrderData;
  cart: Item[];
  addItemToCart: (item: Item) => void;
  removeItemOfCart: (id: number) => void;
  increaseAmountItem: (id: number) => void;
  decreaseAmountItem: (id: number) => void;
  shouldEmptyCart: () => void;
  generateOrder: (data: OrderData) => void;
}

interface ShoppingProviderProps {
  children: ReactNode;
}

export const ShoppingContext = createContext({} as ShoppingContextType);

export function ShoppingProvider({ children }: ShoppingProviderProps) {
  const [shoppingCartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      order: {},
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffeeDelivery:cart-state-1.0.0',
      );
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      } else {
        localStorage.setItem(
          '@coffeeDelivery:cart-state-1.0.0',
          JSON.stringify({ cart: [], order: {} }),
        );
      }
    },
  );

  const { cart, order } = shoppingCartState;

  function generateOrder(order: OrderData) {
    const id = String(new Date().getTime());

    const newOrder: Order = {
      id,
      orderDate: new Date(),
      ...order,
    };

    dispatch(generateOrderAction(newOrder));
  }

  function addItemToCart(item: Item) {
    dispatch(addItemToCartAction(item));
  }

  function removeItemOfCart(id: number) {
    dispatch(removeItemOfCartAction(id));
  }

  function increaseAmountItem(id: number) {
    dispatch(increaseAmountItemAction(id));
  }

  function decreaseAmountItem(id: number) {
    dispatch(decreaseAmountItemAction(id));
  }

  function shouldEmptyCart() {
    dispatch(shouldEmptyCartAction());
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(shoppingCartState);
    localStorage.setItem('@coffeeDelivery:cart-state-1.0.0', stateJSON);
  }, [shoppingCartState]);

  return (
    <ShoppingContext.Provider
      value={{
        cart,
        order,
        addItemToCart,
        removeItemOfCart,
        increaseAmountItem,
        decreaseAmountItem,
        shouldEmptyCart,
        generateOrder,
      }}>
      {children}
    </ShoppingContext.Provider>
  );
}
