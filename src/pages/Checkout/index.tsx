import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingContext } from '../../contexts/ShoppingContext';
import { CheckoutForm } from './CheckoutForm';
import { ShoppingCart } from './ShoppingCart';
import { CheckoutContainer, LeftSection, RightSection } from './styles';

export function Checkout() {
  const { handleEmptyCart } = useContext(ShoppingContext);
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(() => {
    navigate('/success');
    handleEmptyCart();
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
