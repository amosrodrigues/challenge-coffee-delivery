import { CoffeeListCard, CoffeListContainer } from './styles';
import { items } from '../../../data';

import { CoffeeCard } from './CoffeCard';

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
