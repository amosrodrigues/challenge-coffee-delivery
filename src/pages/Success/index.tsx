import {
  IconItem,
  OrderSteps,
  OrderInfo,
  SuccessContainer,
  SuccessHeader,
  SuccessSumary,
} from './styles'
import illustration from '../../assets/illustration.svg'
import { Bank, CreditCard, MapPin, Money, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { ShoppingContext } from '../../contexts/ShoppingContext'
import { ButtonRedirect } from '../Checkout/ButtonRedirect'
import { useNavigate } from 'react-router-dom'

export function Success() {
  const { order } = useContext(ShoppingContext)
  const navigate = useNavigate()

  const paymantType =
    order.paymentType === 'credit'
      ? ' Cartão de Crédito'
      : order.paymentType === 'debit'
      ? 'Cartão de Débito'
      : 'Dinheiro'

  const icon =
    order.paymentType === 'credit' ? (
      <CreditCard size={16} weight="fill" />
    ) : order.paymentType === 'debit' ? (
      <Bank size={16} weight="fill" />
    ) : (
      <Money size={16} weight="fill" />
    )

  return (
    <SuccessContainer>
      <SuccessHeader>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessHeader>

      <SuccessSumary>
        <OrderInfo>
          <OrderSteps>
            <IconItem iconBackgroundColor="purple">
              <MapPin size={16} weight="fill" />
            </IconItem>
            <p>
              Entrega em Rua{' '}
              <strong>{`${order.street}, ${order.streetNumber}${
                order.complement && ', ' + order.complement
              }`}</strong>
              <br />
              {/* {` ${order.district} - ${order.city}, ${order.uf}`} */}
              <span>{order.district}</span>
              {' - '}
              <span id="city">{order.city}</span>
              {', '}
              <span id="uf">{order.uf}</span>
            </p>
          </OrderSteps>

          <OrderSteps>
            <IconItem iconBackgroundColor="yellow">
              <Timer size={16} weight="fill" />
            </IconItem>
            <p>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </p>
          </OrderSteps>

          <OrderSteps>
            <IconItem iconBackgroundColor="yellowDark">{icon}</IconItem>
            <p>
              Pagamento na entrega
              <br />
              <strong id="payment-type">{paymantType}</strong>
            </p>
          </OrderSteps>
          <ButtonRedirect type="button" onClick={() => navigate('/')} />
        </OrderInfo>
        <img src={illustration} alt="" />
      </SuccessSumary>
    </SuccessContainer>
  )
}
