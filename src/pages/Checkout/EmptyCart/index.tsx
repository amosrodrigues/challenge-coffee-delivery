import { useNavigate } from 'react-router-dom';
import { ButtonRedirect } from '../ButtonRedirect';
import { EmptyCartContainer } from './styles';

export function EmptyCart() {
  const navigate = useNavigate();
  return (
    <EmptyCartContainer>
      <h2>O seu carrinho está vazio!</h2>
      <p>Aproveite para conhecer e degustar dos cafés especiais.</p>

      <ButtonRedirect type="button" onClick={() => navigate('/')} />
    </EmptyCartContainer>
  );
}
