import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import {
  Address,
  AddressHeader,
  FormContainer,
  Payment,
  AddressFields,
  AddressInpunt,
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
          <AddressInpunt placeholder="CEP" />
          <AddressInpunt placeholder="Rua" />
          <AddressWithTwoFields>
            <AddressInpunt placeholder="Número" />
            <AddressInpunt placeholder="Complemento" />
            <span>Opcional</span>
          </AddressWithTwoFields>
          <AddressWithThreeFields>
            <AddressInpunt placeholder="Bairro" />
            <AddressInpunt placeholder="Cidade" />
            <AddressInpunt placeholder="UF" />
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
