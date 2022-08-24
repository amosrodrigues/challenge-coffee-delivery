import { createContext, ReactNode, useCallback, useState } from 'react';
import { items } from '../data';

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
  itemsList: Item[];
}

interface ShoppingProviderProps {
  children: ReactNode;
}

interface CartType {
  id: number;
  quantity: number;
}

export const ShoppingContext = createContext({} as ShoppingContextType);

export function ShoppingProvider({ children }: ShoppingProviderProps) {
  const [itemsList, setItemsList] = useState(items);

  const [cart, setCart] = useState<CartType>({} as CartType);

  // function handleAddCart() {

  // }

  return (
    <ShoppingContext.Provider
      value={{
        itemsList,
      }}>
      {children}
    </ShoppingContext.Provider>
  );
}
