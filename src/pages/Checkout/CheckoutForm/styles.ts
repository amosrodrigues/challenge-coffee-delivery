import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  /* width: 100%; */
  /* height: 591px; */
`;

export const Address = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
`;

export const AddressHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`;

export const AddressLocation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font: 400 1rem 'Roboto';
  }

  p {
    font: 400 0.875rem 'Roboto';
  }
`;

export const AddressFields = styled.div``;

export const Payment = styled.div`
  background: ${(props) => props.theme['base-card']};
`;
