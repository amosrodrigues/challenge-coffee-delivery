import { items } from '../../../data';
import { Minus, Plus, Trash } from 'phosphor-react';
import { useCallback, useState } from 'react';
import { priceFormatter } from '../../../utils/formatter';
import {
  CartItemCard,
  ShoppingCartContainer,
  ButtonActionQuantity,
  CartInfoActions,
  ButtonRemoveItem,
  CartItemSumary,
  ButtonSubmitOrder,
} from './styles';

export function ShoppingCart() {
  const itemList = items.slice(0, 2);
  const [quantity, setQuantity] = useState(1);

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

  return (
    <ShoppingCartContainer>
      {itemList.map((item) => {
        return (
          <CartItemCard>
            <img src={item.thamb} alt={item.type} />

            <CartInfoActions>
              <h3>{item.type}</h3>

              <div>
                <ButtonActionQuantity>
                  <button type="button" onClick={handleDecreaseAmount}>
                    <Minus size={14} />
                  </button>
                  <span>{quantity}</span>
                  <button type="button" onClick={handleIncreaseAmount}>
                    <Plus size={14} />
                  </button>
                </ButtonActionQuantity>

                <ButtonRemoveItem type="button">
                  <Trash size={16} />
                  REMOVER
                </ButtonRemoveItem>
              </div>
            </CartInfoActions>
            <span>{priceFormatter.format(item.price)}</span>
          </CartItemCard>
        );
      })}

      <CartItemSumary>
        <tbody>
          <tr>
            <td>Total de itens</td>
            <td>R$ 29,70</td>
          </tr>
          <tr>
            <td>Entrega</td>
            <td>R$ 3,50</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>R$ 33,20</td>
          </tr>
        </tfoot>
      </CartItemSumary>

      <ButtonSubmitOrder type="submit">CONFIMAR PEDIDO</ButtonSubmitOrder>
    </ShoppingCartContainer>
  );
}
