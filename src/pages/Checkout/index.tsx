import { useContext } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ShoppingContext } from '../../contexts/ShoppingContext';
import { CheckoutForm } from './CheckoutForm';
import { ShoppingCart } from './ShoppingCart';
import { CheckoutContainer, LeftSection, RightSection } from './styles';

import { zodResolver } from '@hookform/resolvers/zod';

import * as zod from 'zod';
import { EmptyCart } from './EmptyCart';

const orderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Campo obrigatório'),
  street: zod.string().min(1, 'Campo obrigatório'),
  streetNumber: zod.string().min(1, 'Campo obrigatório'),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'Campo obrigatório'),
  city: zod.string().min(1, 'Campo obrigatório'),
  uf: zod.string().min(1, 'Campo obrigatório'),
  paymentType: zod.enum(['credit', 'debit', 'money']),
});

type orderFormData = zod.infer<typeof orderFormValidationSchema>;

export function Checkout() {
  const { shouldEmptyCart, generatOrder, cart } = useContext(ShoppingContext);
  const navigate = useNavigate();

  const orderForm = useForm<orderFormData>({
    resolver: zodResolver(orderFormValidationSchema),
    defaultValues: {
      paymentType: 'credit',
    },
  });

  const { handleSubmit } = orderForm;

  const handleSubmitForm: SubmitHandler<orderFormData> = async (
    data: orderFormData,
    event,
  ) => {
    event?.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    navigate('/success');
    generatOrder(data);
    shouldEmptyCart();
  };

  return (
    <CheckoutContainer>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <FormProvider {...orderForm}>
            <LeftSection>
              <h2>Complete seu pedido</h2>

              <CheckoutForm />
            </LeftSection>

            <RightSection>
              <h2>Cafés selecionados</h2>

              <ShoppingCart />
            </RightSection>
          </FormProvider>
        </form>
      )}
    </CheckoutContainer>
  );
}
