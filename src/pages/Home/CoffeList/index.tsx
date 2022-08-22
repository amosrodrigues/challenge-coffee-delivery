import {
  CardBody,
  CardFooter,
  CardFooterActions,
  CardHeader,
  CoffeCard,
  CoffeListContainer,
} from './styles';
import { items } from '../../../data';
import { priceFormatterOnly } from '../../../utils/formatter';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

interface Item {
  id: number;
  type: string;
  thamb: string;
  description: string;
  category: [];
  price: number;
  quantity: number;
}

export function CoffeeList() {
  return (
    <CoffeListContainer>
      <h2>Nossos cafés</h2>

      <CoffeCard>
        <CardHeader>
          <img src={items[0].thamb} alt={items[0].type} />

          {items[0].category.map((tag) => (
            <span>{tag}</span>
          ))}
        </CardHeader>

        <CardBody>
          <h3>{items[0].type}</h3>
          <p>{items[0].description}</p>
        </CardBody>

        <CardFooter>
          <span>
            R$ <strong>{priceFormatterOnly.format(items[0].price)}</strong>
          </span>

          <CardFooterActions>
            <div>
              <button>
                <Minus size={14} />
              </button>
              <span>{items[0].quantity}</span>
              <button>
                <Plus size={14} />
              </button>
            </div>

            <NavLink to="#" title="Carrinho">
              <ShoppingCart size={22} weight="fill" />
            </NavLink>
          </CardFooterActions>
        </CardFooter>
      </CoffeCard>
    </CoffeListContainer>
  );
}
