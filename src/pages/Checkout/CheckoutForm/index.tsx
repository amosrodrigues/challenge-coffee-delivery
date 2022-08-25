import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import { Input } from '../../../components/Form/Input';
import {
  Address,
  AddressHeader,
  FormContainer,
  Payment,
  AddressFields,
  AddressWithTwoFields,
  AddressWithThreeFields,
  PaymentHeader,
  PaymentOptions,
  PaymentOptionsCard,
} from './styles';

export function CheckoutForm() {
  return (
    <FormContainer>
      <Address>
        <AddressHeader>
          <MapPinLine size={22} />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </AddressHeader>

        <AddressFields>
          <Input placeholder="CEP" />
          <Input placeholder="Rua" />
          <AddressWithTwoFields>
            <Input placeholder="Número" />
            <Input placeholder="Complemento" />
            <span>Opcional</span>
          </AddressWithTwoFields>
          <AddressWithThreeFields>
            <Input placeholder="Bairro" />
            <Input placeholder="Cidade" />
            <Input placeholder="UF" />
          </AddressWithThreeFields>
        </AddressFields>
      </Address>

      <Payment>
        <PaymentHeader>
          <CurrencyDollar size={22} />
          <div>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </PaymentHeader>

        <PaymentOptions>
          <PaymentOptionsCard>
            <CreditCard size={16} />
            <p>CARTÃO DE CRÉDITO</p>
          </PaymentOptionsCard>
          <PaymentOptionsCard>
            <Bank size={16} />
            <p>CARTÃO DE DÉBITO</p>
          </PaymentOptionsCard>
          <PaymentOptionsCard selected>
            <Money size={16} />
            <p>DINHEIRO</p>
          </PaymentOptionsCard>
        </PaymentOptions>
      </Payment>
    </FormContainer>
  );
}
