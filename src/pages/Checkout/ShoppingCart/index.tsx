import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { priceFormatter } from '../../../utils/formatter'
import {
  CartItemCard,
  ShoppingCartContainer,
  ButtonActionQuantity,
  CartInfoActions,
  ButtonRemoveItem,
  CartItemSumary,
  ButtonSubmitOrder,
} from './styles'
import { ShoppingContext } from '../../../contexts/ShoppingContext'
import { ButtonRedirect } from '../ButtonRedirect'
import { useNavigate } from 'react-router-dom'
import { useFormContext } from 'react-hook-form'
import { ModalDeletion } from '../ModalDeletion'

export function ShoppingCart() {
  const [activeModal, setActiveModal] = useState({
    isOpen: false,
    idSelected: -1,
  })

  const { cart, removeItemOfCart, increaseAmountItem, decreaseAmountItem } =
    useContext(ShoppingContext)

  const navigate = useNavigate()

  const { formState } = useFormContext()

  function handleActiveModal(id: number) {
    setActiveModal({ isOpen: true, idSelected: id })
  }

  function handleCloseModal() {
    setActiveModal({ isOpen: false, idSelected: -1 })
  }

  function handleRemoveItemOfCart() {
    removeItemOfCart(activeModal.idSelected)
    setActiveModal({ isOpen: false, idSelected: -1 })
  }

  const totalPriceItem = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  const deliveryFee = 4
  const total = totalPriceItem + deliveryFee

  return (
    <>
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
                      onClick={() => decreaseAmountItem(item.id)}
                    >
                      <Minus size={14} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => increaseAmountItem(item.id)}
                    >
                      <Plus size={14} />
                    </button>
                  </ButtonActionQuantity>

                  <ButtonRemoveItem
                    type="button"
                    onClick={() => handleActiveModal(item.id)}
                  >
                    <Trash size={16} />
                    <span>REMOVER</span>
                  </ButtonRemoveItem>
                </div>
              </CartInfoActions>
              <span>{priceFormatter.format(item.price * item.quantity)}</span>
            </CartItemCard>
          )
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
              <td id="total">{priceFormatter.format(total)}</td>
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
      <ModalDeletion
        onActiveModal={activeModal}
        onClose={handleCloseModal}
        onRemoveItem={handleRemoveItemOfCart}
      />
    </>
  )
}
