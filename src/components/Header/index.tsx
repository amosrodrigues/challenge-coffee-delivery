import { Cart, HeaderContainer, Location } from './styles'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { ShoppingContext } from '../../contexts/ShoppingContext'

export function Header() {
  const { cart, order } = useContext(ShoppingContext)
  return (
    <HeaderContainer>
      <NavLink to="/" title="Voltar para Home">
        <img src={logo} alt="" />
      </NavLink>

      <div>
        <Location>
          <MapPin size={22} weight="fill" />
          {order.city ? (
            <span>{`${order.city}, ${order.uf}`}</span>
          ) : (
            <span>Sua localização</span>
          )}
        </Location>

        <Cart>
          <NavLink to="/checkout" title="Carrinho de Compras">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>

          {cart.length > 0 && <span>{cart.length}</span>}
        </Cart>
      </div>
    </HeaderContainer>
  )
}
