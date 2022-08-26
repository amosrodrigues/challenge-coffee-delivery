import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import { useFormContext } from 'react-hook-form';
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
  const { register, formState } = useFormContext();

  const { errors } = formState;

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
          <Input placeholder="CEP" error={!!errors.cep} {...register('cep')} />
          <Input
            placeholder="Rua"
            error={!!errors.street}
            {...register('street')}
          />
          <AddressWithTwoFields>
            <Input
              placeholder="Número"
              error={!!errors.streetNumber}
              {...register('streetNumber')}
            />
            <Input
              placeholder="Complemento"
              error={!!errors.complement}
              {...register('complement')}
            />
            <span>Opcional</span>
          </AddressWithTwoFields>
          <AddressWithThreeFields>
            <Input
              placeholder="Bairro"
              error={!!errors.district}
              {...register('district')}
            />
            <Input
              placeholder="Cidade"
              error={!!errors.city}
              {...register('city')}
            />
            <Input placeholder="UF" error={!!errors.uf} {...register('uf')} />
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
