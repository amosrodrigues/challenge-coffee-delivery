import styled from 'styled-components';

export const ShoppingCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 1.5rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
`;

export const CartItemCard = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem 1.5rem;
  gap: 1.25rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  > img {
    width: 64px;
    height: 64px;
  }

  > span {
    flex: 1;
    display: flex;
    justify-content: end;
    font-weight: 700;
  }
`;

export const CartInfoActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > h3 {
    font: 400 1rem 'Roboto';
    color: ${(props) => props.theme['base-subtitle']};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const CartInfoActionsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  gap: 0.25rem;
  height: 100%;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border: 0;
  border-radius: 6px;

  font-size: 0.75rem;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  SVG {
    color: ${(props) => props.theme.purple};
  }
`;

export const ButtonActionQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  flex: 1;

  width: 72px;
  height: 38px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    cursor: pointer;

    background: transparent;
    color: ${(props) => props.theme.purple};
    transition: color 0.2s;

    :focus {
      box-shadow: none;
    }

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  span {
    color: ${(props) => props.theme['base-title']};
  }
`;

export const CartItemSumary = styled.table`
  width: 100%;
  line-height: 2;

  tbody tr td:nth-child(odd) {
    font-size: 0.875rem;
  }

  td:nth-child(even) {
    text-align: right;
  }

  tfoot tr td {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const ButtonSubmitOrder = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  cursor: pointer;

  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.6;

  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  border: 0;
  border-radius: 6px;

  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`;
