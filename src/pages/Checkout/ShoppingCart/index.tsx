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
import { ButtonRedirect } from '../ButtonRedirect';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';

export function ShoppingCart() {
  const { cart, handleRemoveCart, handleIncreaseAmount, handleDecreaseAmount } =
    useContext(ShoppingContext);

  const navigate = useNavigate();

  const { formState } = useFormContext();

  const totalPriceItem = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const deliveryFee = 4;
  const total = totalPriceItem + deliveryFee;

  return (
    <ShoppingCartContainer>
      {cart.map((item) => {
        return (
          <CartItemCard key={item.id}>
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
                  <span>REMOVER</span>
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
            <td>{priceFormatter.format(totalPriceItem)}</td>
          </tr>
          <tr>
            <td>Entrega</td>
            <td>{priceFormatter.format(deliveryFee)}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{priceFormatter.format(total)}</td>
          </tr>
        </tfoot>
      </CartItemSumary>

      <ButtonSubmitOrder type="submit">
        {formState.isSubmitting ? (
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          'CONFIMAR PEDIDO'
        )}
      </ButtonSubmitOrder>

      <ButtonRedirect type="button" onClick={() => navigate('/')} />
    </ShoppingCartContainer>
  );
}
