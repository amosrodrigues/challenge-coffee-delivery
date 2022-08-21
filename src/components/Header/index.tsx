import { HeaderContainer, Location } from './styles';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { MapPin, MapPinLine, ShoppingCart } from 'phosphor-react';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <nav>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Location>

        <NavLink to="#" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
