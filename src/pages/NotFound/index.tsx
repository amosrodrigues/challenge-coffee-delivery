import { NotFoundContainer } from './styles'

import notFoundImg from '../../assets/page-not-found.svg'
import { ButtonRedirect } from '../Checkout/ButtonRedirect'
import { matchPath, useLocation, useNavigate } from 'react-router-dom'

export function NotFound() {
  const navigate = useNavigate()

  // const location = useLocation();

  // const routes = ['/checkout', '/success'];

  // const currentRoute = routes.find((route) =>
  //   matchPath(location.pathname, route),
  // );

  // if (currentRoute) {
  //   navigate(`${currentRoute}`);
  // }

  return (
    <NotFoundContainer>
      <img src={notFoundImg} alt="Page not found" />
      <h3>A página não pode ser encontrada.</h3>
      <ButtonRedirect onClick={() => navigate('/')} />
    </NotFoundContainer>
  )
}
