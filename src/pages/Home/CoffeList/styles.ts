import styled from 'styled-components'

export const CoffeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 1rem 0;

    h2 {
      font-size: 1.5rem;
    }
  }
`

export const CoffeeListCard = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 2.5rem 2rem;
  margin-top: 3.375rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 3rem;
  }
`
