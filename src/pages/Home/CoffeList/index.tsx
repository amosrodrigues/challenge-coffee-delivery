import { CoffeeListCard, CoffeListContainer } from './styles';

import { CoffeeCard } from './CoffeCard';

import { items } from '../../../data';
import { useContext } from 'react';

import { ShoppingContext } from '../../../contexts/ShoppingContext';

export function CoffeeList() {
  const { cart } = useContext(ShoppingContext);

  const itemsFiltered = items.map((itemList) => {
    const itemCart =
      cart && cart.find((itemCart) => itemCart.id === itemList.id);

    if (itemCart && itemCart.id === itemList.id) {
      itemList.quantity = itemCart.quantity;
      return itemList;
    }
    return itemList;
  });

  return (
    <CoffeListContainer>
      <h2>Nossos cafés</h2>

      <CoffeeListCard>
        {itemsFiltered &&
          itemsFiltered.map((item) => <CoffeeCard key={item.id} item={item} />)}
      </CoffeeListCard>
    </CoffeListContainer>
  );
}
