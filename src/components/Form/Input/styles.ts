import styled from 'styled-components';

export const InpuntStyled = styled.input`
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  font-size: 0.875rem;
  padding: 0.75rem;
  height: 2.625rem;
`;
