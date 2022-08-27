import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react';
import {
  addItemToCartAction,
  decreaseAmountItemAction,
  increaseAmountItemAction,
  removeItemOfCartAction,
  shouldEmptyCartAction,
} from '../reducers/cart/actions';
import { cartReducer, Item } from '../reducers/cart/reducer';

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

interface ShoppingContextType {
  order: OrderData;
  cart: Item[];
  generatOrder: (data: OrderData) => void;
  addItemToCart: (item: Item) => void;
  removeItemOfCart: (id: number) => void;
  increaseAmountItem: (id: number) => void;
  decreaseAmountItem: (id: number) => void;
  shouldEmptyCart: () => void;
}

interface ShoppingProviderProps {
  children: ReactNode;
}

export const ShoppingContext = createContext({} as ShoppingContextType);

export function ShoppingProvider({ children }: ShoppingProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
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
          JSON.stringify({ cart: [] }),
        );
      }
    },
  );

  const { cart } = cartState;

  const [order, setOrder] = useState<OrderData>(() => {
    const storedOrderAsJSON = localStorage.getItem(
      '@coffeeDelivery:cart-order-1.0.0',
    );
    if (storedOrderAsJSON) {
      return JSON.parse(storedOrderAsJSON);
    } else {
      localStorage.setItem(
        '@coffeeDelivery:cart-order-1.0.0',
        JSON.stringify({}),
      );
    }
  });

  function generatOrder(data: OrderData) {
    setOrder(data);
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
    const stateJSON = JSON.stringify(cartState);
    const orderJSON = JSON.stringify(order);
    localStorage.setItem('@coffeeDelivery:cart-state-1.0.0', stateJSON);
    localStorage.setItem('@coffeeDelivery:cart-order-1.0.0', orderJSON);
  }, [cart, order]);

  return (
    <ShoppingContext.Provider
      value={{
        order,
        cart,
        generatOrder,
        addItemToCart,
        removeItemOfCart,
        increaseAmountItem,
        decreaseAmountItem,
        shouldEmptyCart,
      }}>
      {children}
    </ShoppingContext.Provider>
  );
}
