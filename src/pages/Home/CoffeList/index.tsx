import { CoffeeListCard, CoffeListContainer } from './styles';

import { CoffeeCard } from './CoffeCard';

import { items } from '../../../data';

export function CoffeeList() {
  return (
    <CoffeListContainer>
      <h2>Nossos cafés</h2>

      <CoffeeListCard>
        {items && items.map((item) => <CoffeeCard key={item.id} item={item} />)}
      </CoffeeListCard>
    </CoffeListContainer>
  );
}
