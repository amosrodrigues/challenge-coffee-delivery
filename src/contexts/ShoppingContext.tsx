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

interface ShoppingContextType {
  cart: Item[];
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
    localStorage.setItem('@coffeeDelivery:cart-state-1.0.0', stateJSON);
  }, [cart]);

  return (
    <ShoppingContext.Provider
      value={{
        cart,
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
