import styled from 'styled-components';
import background from '../../../assets/background-intro.svg';

export const CoffeeIntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  position: relative;
  padding: 5.75rem 0;

  > div {
    display: flex;
    flex-direction: column;
    line-height: 1.3;
    gap: 1rem;

    h1 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 3rem;

      color: ${(props) => props.theme['base-title']};
    }

    p {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.25rem;
    }
  }

  img {
    width: 476px;
    height: 360px;
    object-fit: cover;
  }
`;

export const Background = styled.div`
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  filter: blur(32px);

  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
`;
