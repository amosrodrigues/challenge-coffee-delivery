import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;

  > a {
    border-radius: 6px;
    padding: 0.5rem 0.5rem 0;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }
`;

export const Cart = styled.nav`
  position: relative;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    width: 20px;
    height: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    padding: 0.25rem;
    right: -8.35px;
    top: -8px;

    font-size: 0.75rem;
    font-weight: 700;

    border-radius: 50%;
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    z-index: 1;
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  font-size: 0.875rem;
  line-height: 1.3;
`;
