import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useCallback, useContext, useState } from 'react';
import { ShoppingContext } from '../../../../contexts/ShoppingContext';
import { Item } from '../../../../reducers/cart/reducer';
import { priceFormatterOnly } from '../../../../utils/formatter';
import {
  ButtonActionQuantity,
  CardBody,
  CardFooter,
  CardFooterActions,
  CardHeader,
  CoffeCardContainer,
} from './styles';

interface CoffeeCardProps {
  item: Item;
}

export function CoffeeCard({ item }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState<number>(item.quantity);

  const { addItemToCart, removeItemOfCart, cart } = useContext(ShoppingContext);

  const selected = cart.some((itemCart) => itemCart.id === item.id);

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
    const itemCart = {
      ...item,
      quantity,
    };

    if (selected) {
      removeItemOfCart(item.id);
    } else {
      addItemToCart(itemCart);
    }
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

        <CardFooterActions selected={selected}>
          <ButtonActionQuantity>
            <button disabled={selected} onClick={handleDecreaseAmount}>
              <Minus size={14} />
            </button>
            <span>{quantity}</span>
            <button disabled={selected} onClick={handleIncreaseAmount}>
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
