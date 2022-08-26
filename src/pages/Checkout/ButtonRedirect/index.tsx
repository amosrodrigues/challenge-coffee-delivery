import { ShoppingCart } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';
import { Button } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ButtonRedirect({ ...props }: ButtonProps) {
  return (
    <Button {...props}>
      <ShoppingCart size={22} weight="fill" />
      CONTINUAR COMPRANDO
    </Button>
  );
}
