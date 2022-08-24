import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useCallback, useState } from 'react';
import { priceFormatterOnly } from '../../../../utils/formatter';
import {
  ButtonActionQuantity,
  CardBody,
  CardFooter,
  CardFooterActions,
  CardHeader,
  CoffeCardContainer,
} from './styles';

interface Item {
  id: number;
  type: string;
  thamb: string;
  description: string;
  category: string[];
  price: number;
  quantity: number;
}

interface CoffeeCardProps {
  item: Item;
}

export function CoffeeCard({ item }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleIncreaseAmount = useCallback(() => {
    setQuantity((state) => (state += 1));
  }, []);

  const handleDecreaseAmount = useCallback(() => {
    setQuantity((state) => {
      if (state > 1) {
        return (state -= 1);
      }
      return state;
    });
  }, []);

  function handleAddItemToShoppingCart() {
    const teste = {
      ...item,
      quantity,
    };
    console.log(teste);
  }

  return (
    <CoffeCardContainer key={item.id}>
      <CardHeader>
        <img src={item.thamb} alt={item.type} />

        <div>
          {item.category.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </CardHeader>

      <CardBody>
        <h3>{item.type}</h3>
        <p>{item.description}</p>
      </CardBody>

      <CardFooter>
        <span>
          R$ <strong>{priceFormatterOnly.format(item.price)}</strong>
        </span>

        <CardFooterActions>
          <ButtonActionQuantity>
            <button onClick={handleDecreaseAmount}>
              <Minus size={14} />
            </button>
            <span>{quantity}</span>
            <button onClick={handleIncreaseAmount}>
              <Plus size={14} />
            </button>
          </ButtonActionQuantity>

          <button onClick={handleAddItemToShoppingCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </CardFooterActions>
      </CardFooter>
    </CoffeCardContainer>
  );
}
