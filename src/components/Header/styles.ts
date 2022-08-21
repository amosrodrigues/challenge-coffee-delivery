import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0.5rem;
      border-radius: 6px;
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
    }
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
