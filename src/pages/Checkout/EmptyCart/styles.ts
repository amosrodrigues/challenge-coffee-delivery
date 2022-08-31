import styled from 'styled-components';

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2.5rem 0;
  padding: 0 1rem;

  font-family: 'Baloo 2';
  text-align: center;

  img {
    width: 13rem;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 1.125rem;
  }

  button {
    margin-top: 2rem;
  }
`;
