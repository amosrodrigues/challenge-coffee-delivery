import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  margin: 2.5rem auto;
  padding: 0 1rem;
  text-align: center;

  img {
    width: 13rem;
  }

  button {
    margin-top: 0.75rem;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1rem;
    }
  }
`
