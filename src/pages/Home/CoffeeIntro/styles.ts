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
    gap: 4.125rem;
  }

  img {
    width: 476px;
    height: 360px;
    object-fit: cover;
  }
`;

export const IntroTextConteinar = styled.div`
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
`;

export const IntroItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem 0rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

const ICON_BACKGROUND_COLORS = {
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
  purple: 'purple',
  baseText: 'base-text',
} as const;

interface IconProps {
  iconBackgroundColor: keyof typeof ICON_BACKGROUND_COLORS;
}

export const IconItem = styled.i<IconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  border-radius: 50%;
  color: ${(props) => props.theme.white};
  background: ${(props) =>
    props.theme[ICON_BACKGROUND_COLORS[props.iconBackgroundColor]]};
`;

export const Background = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;

  filter: blur(64px);

  position: absolute;
  left: -10rem;
  right: -10rem;
  top: 0px;
  bottom: 0px;
`;
