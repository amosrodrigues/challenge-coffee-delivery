import { Minus, Plus, Trash } from 'phosphor-react';
import { useContext } from 'react';
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
import { ShoppingContext } from '../../../contexts/ShoppingContext';

export function ShoppingCart() {
  const { cart, handleRemoveCart, handleIncreaseAmount, handleDecreaseAmount } =
    useContext(ShoppingContext);

  return (
    <ShoppingCartContainer>
      {cart.map((item) => {
        return (
          <CartItemCard>
            <img src={item.thamb} alt={item.type} />

            <CartInfoActions>
              <h3>{item.type}</h3>

              <div>
                <ButtonActionQuantity>
                  <button
                    type="button"
                    onClick={() => handleDecreaseAmount(item.id)}>
                    <Minus size={14} />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => handleIncreaseAmount(item.id)}>
                    <Plus size={14} />
                  </button>
                </ButtonActionQuantity>

                <ButtonRemoveItem
                  type="button"
                  onClick={() => handleRemoveCart(item.id)}>
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
