import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutForm } from './CheckoutForm';
import { ShoppingCart } from './ShoppingCart';
import { CheckoutContainer, LeftSection, RightSection } from './styles';

export function Checkout() {
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(() => {
    navigate('/success');
  }, []);

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmitForm}>
        <LeftSection>
          <h2>Complete seu pedido</h2>

          <CheckoutForm />
        </LeftSection>

        <RightSection>
          <h2>Cafés selecionados</h2>

          <ShoppingCart />
        </RightSection>
      </form>
    </CheckoutContainer>
  );
}
