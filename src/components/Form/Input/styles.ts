import styled, { css } from 'styled-components';

interface InpuntStyled {
  error?: boolean;
}

export const InpuntStyled = styled.input<InpuntStyled>`
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  ${(props) =>
    props.error &&
    css`
      border-color: red;
      &:focus {
        box-shadow: none;
      }
    `}

  font-size: 0.875rem;
  padding: 0.75rem;
  height: 2.625rem;
`;
