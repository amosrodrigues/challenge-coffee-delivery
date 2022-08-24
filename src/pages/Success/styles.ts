import styled from 'styled-components';

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;
`;

export const SuccessHeader = styled.div`
  h1 {
    font-family: 800 2rem 'Baloo 2';
    color: ${(props) => props.theme['yellow-dark']};
    line-height: 1.6;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const SuccessSumary = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
  flex-basis: 47%;

  border-radius: 6px 36px 6px 36px;
  background: ${(props) => props.theme.background};
  position: relative;

  box-sizing: border-box;
  background-clip: padding-box;
  border: solid 1px transparent;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -0.0625rem;
    border-radius: inherit;
    background: linear-gradient(to right, #dbac2c, #8047f8);
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

export const IconItem = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  border-radius: 50%;
  background: ${(props) =>
    props.theme[ICON_BACKGROUND_COLORS[props.iconBackgroundColor]]};

  svg {
    fill: ${(props) => props.theme.white};
  }
`;

export const OrderSteps = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    line-height: 21px;
  }
`;
