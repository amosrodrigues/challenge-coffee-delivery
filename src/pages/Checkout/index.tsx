import { CheckoutForm } from './CheckoutForm';
import { ShoppingCart } from './ShoppingCart';
import { CheckoutContainer, LeftSection, RightSection } from './styles';

export function Checkout() {
  return (
    <CheckoutContainer>
      <form>
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
