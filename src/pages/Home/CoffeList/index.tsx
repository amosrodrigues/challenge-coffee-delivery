import { CoffeeListCard, CoffeListContainer } from './styles';

import { CoffeeCard } from './CoffeCard';
import { useContext } from 'react';
import { ShoppingContext } from '../../../contexts/ShoppingContext';

export function CoffeeList() {
  const { itemsList } = useContext(ShoppingContext);

  return (
    <CoffeListContainer>
      <h2>Nossos cafés</h2>

      <CoffeeListCard>
        {itemsList &&
          itemsList.map((item) => <CoffeeCard key={item.id} item={item} />)}
      </CoffeeListCard>
    </CoffeListContainer>
  );
}
