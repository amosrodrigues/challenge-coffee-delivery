import { Cart, HeaderContainer, Location } from './styles';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { MapPin, ShoppingCart } from 'phosphor-react';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <div>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Location>

        <Cart>
          <NavLink to="#" title="Carrinho">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>

          <span>3</span>
        </Cart>
      </div>
    </HeaderContainer>
  );
}