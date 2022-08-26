import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  padding: 0.75rem 0.5rem;
  cursor: pointer;

  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.6;

  background: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.white};
  border: 0;
  border-radius: 6px;

  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme['purple-dark']};
  }

  &:focus {
    box-shadow: none;
  }
`;
