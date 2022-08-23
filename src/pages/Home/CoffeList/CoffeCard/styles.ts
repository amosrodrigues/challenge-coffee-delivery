import styled from 'styled-components';

export const CoffeCardContainer = styled.div`
  width: 256px;
  height: 310px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 0 1.5rem 1.25rem;

  border-radius: 6px 36px 6px 36px;
  background: ${(props) => props.theme['base-card']};
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: 100%;

  img {
    width: 120px;
    height: 120px;
    margin-top: -1.25rem;
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    width: 100%;

    span {
      display: block;
      padding: 0.25rem 0.5rem;
      font-weight: 700;
      font-size: 0.625rem;
      text-transform: uppercase;
      border-radius: 100px;

      color: ${(props) => props.theme['yellow-dark']};
      background: ${(props) => props.theme['yellow-light']};
    }
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;

  h3 {
    font: 700 1.25rem 'Baloo 2';
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.75rem;
  width: 100%;

  span {
    font-size: 0.875rem;
  }

  strong {
    font: 800 1.5rem 'Baloo 2';
  }
`;

export const CardFooterActions = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    cursor: pointer;

    padding: 0.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};
    transition: background-color 0.2s;

    :focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme['purple-dark']};
    }

    &:hover {
      background: ${(props) => props.theme.purple};
    }
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
