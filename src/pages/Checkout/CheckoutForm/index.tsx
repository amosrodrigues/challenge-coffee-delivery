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
  const { register, formState, watch } = useFormContext();

  const { errors } = formState;

  const paymentType = watch('paymentType');

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
          <PaymentOptionsCard selected={paymentType === 'credit'}>
            <CreditCard size={16} />
            <p>CARTÃO DE CRÉDITO</p>
            <label htmlFor="credit">
              <Input
                id="credit"
                type="radio"
                value="credit"
                {...register('paymentType')}
              />
            </label>
          </PaymentOptionsCard>
          <PaymentOptionsCard selected={paymentType === 'debit'}>
            <Bank size={16} />
            <p>CARTÃO DE DÉBITO</p>
            <label htmlFor="debit">
              <Input
                id="debit"
                type="radio"
                value="debit"
                {...register('paymentType')}
              />
            </label>
          </PaymentOptionsCard>
          <PaymentOptionsCard selected={paymentType === 'money'}>
            <Money size={16} />
            <p>DINHEIRO</p>
            <label htmlFor="money">
              <Input
                id="money"
                type="radio"
                value="money"
                {...register('paymentType')}
              />
            </label>
          </PaymentOptionsCard>
        </PaymentOptions>
      </Payment>
    </FormContainer>
  );
}
