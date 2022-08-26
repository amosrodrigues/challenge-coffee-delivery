import { createContext, ReactNode, useEffect, useState } from 'react';

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

interface ShoppingContextType {
  order: OrderData;
  cart: Item[];
  handleAddOrder: (data: OrderData) => void;
  handleAddCart: (item: Item) => void;
  handleRemoveCart: (id: number) => void;
  handleIncreaseAmount: (id: number) => void;
  handleDecreaseAmount: (id: number) => void;
  handleEmptyCart: () => void;
}

interface ShoppingProviderProps {
  children: ReactNode;
}

export const ShoppingContext = createContext({} as ShoppingContextType);

export function ShoppingProvider({ children }: ShoppingProviderProps) {
  const [cart, setCart] = useState<Item[]>(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffeeDelivery:cart-state-1.0.0',
    );
    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    } else {
      localStorage.setItem(
        '@coffeeDelivery:cart-state-1.0.0',
        JSON.stringify([]),
      );
    }
  });

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

  function handleAddOrder(data: OrderData) {
    setOrder(data);
  }

  function handleAddCart(item: Item) {
    setCart((state) => [...state, item]);
  }

  function handleRemoveCart(id: number) {
    setCart((state) => state.filter((item) => item.id !== id));
  }

  function handleIncreaseAmount(id: number) {
    const item = cart.find((item) => item.id === id);
    const NewQuantity = item && item.quantity + 1;

    setCart((state) =>
      state.map((item) => {
        if (item.id === id && NewQuantity) {
          item.quantity = NewQuantity;
        }
        return item;
      }),
    );
  }

  function handleDecreaseAmount(id: number) {
    const item = cart.find((item) => item.id === id);
    const NewQuantity = item && item.quantity > 1 && item.quantity - 1;

    setCart((state) =>
      state.map((item) => {
        if (item.id === id && NewQuantity) {
          item.quantity = NewQuantity;
        }
        return item;
      }),
    );
  }

  function handleEmptyCart() {
    setCart([]);
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cart);
    const orderJSON = JSON.stringify(order);
    localStorage.setItem('@coffeeDelivery:cart-state-1.0.0', stateJSON);
    localStorage.setItem('@coffeeDelivery:cart-order-1.0.0', orderJSON);
  }, [cart, order]);

  return (
    <ShoppingContext.Provider
      value={{
        order,
        cart,
        handleAddOrder,
        handleAddCart,
        handleRemoveCart,
        handleIncreaseAmount,
        handleDecreaseAmount,
        handleEmptyCart,
      }}>
      {children}
    </ShoppingContext.Provider>
  );
}
