import {
  IconItem,
  OrderSteps,
  OrderInfo,
  SuccessContainer,
  SuccessHeader,
  SuccessSumary,
} from './styles';
import illustration from '../../assets/illustration.svg';
import { MapPin, Money, Timer } from 'phosphor-react';

export function Success() {
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
              Entrega em Rua <strong>João Daniel Martinelli, 102</strong>
              <br />
              Farrapos - Porto Alegre, RS
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
            <IconItem iconBackgroundColor="yellowDark">
              <Money size={16} weight="fill" />
            </IconItem>
            <p>
              Pagamento na entrega
              <br />
              <strong>Cartão de Crédito</strong>
            </p>
          </OrderSteps>
        </OrderInfo>
        <img src={illustration} alt="" />
      </SuccessSumary>
    </SuccessContainer>
  );
}
