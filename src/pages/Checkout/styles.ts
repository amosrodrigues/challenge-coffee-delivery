import styled from 'styled-components';

export const CheckoutContainer = styled.main`
  flex: 1;

  form {
    display: flex;
    gap: 2rem;
    margin: 2.5rem 0;
  }

  form section h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.9375rem;
  }
`;

export const LeftSection = styled.section`
  flex: 1;
`;

export const RightSection = styled.section`
  width: 28rem;
`;
