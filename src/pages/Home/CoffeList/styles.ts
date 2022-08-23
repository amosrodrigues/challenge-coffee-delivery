import styled from 'styled-components';

export const CoffeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
  }
`;

export const CoffeeListCard = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2.5rem 2rem;
  margin-top: 3.375rem;
`;
