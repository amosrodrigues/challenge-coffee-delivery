import styled, { css } from 'styled-components';

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

const BaseHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    h3 {
      color: ${(props) => props.theme['base-subtitle']};
      font: 400 1rem 'Roboto';
      line-height: 21px;
    }

    p {
      font: 400 0.875rem 'Roboto';
      line-height: 18px;
    }
  }
`;

export const AddressHeader = styled(BaseHeader)`
  > svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`;

export const AddressFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AddressInpunt = styled.input`
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  font-size: 0.875rem;
  padding: 0.75rem;
  height: 2.625rem;

  :nth-child(1) {
    width: 12.5rem;
  }
`;

export const AddressWithTwoFields = styled.div`
  display: flex;
  gap: 0.75rem;
  position: relative;

  input:nth-child(1) {
    width: 12.5rem;
  }

  input:nth-child(2) {
    flex: 1;
    padding-right: 4.5rem;
  }

  span {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    font-style: italic;
    padding: 0.75rem;
    color: ${(props) => props.theme['base-label']};
  }
`;

export const AddressWithThreeFields = styled.div`
  display: flex;
  gap: 0.75rem;

  input:nth-child(1) {
    width: 12.5rem;
  }

  input:nth-child(1) {
    flex: 1;
  }

  input:nth-child(3) {
    width: 3.75rem;
  }
`;

export const Payment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
`;

export const PaymentHeader = styled(BaseHeader)`
  > svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 0.75rem;
`;

interface PaymentOptionsCardProps {
  selected?: boolean;
}

export const PaymentOptionsCard = styled.div<PaymentOptionsCardProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 0.75rem;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 6px;
  font-size: 0.75rem;
  cursor: pointer;

  ${(props) =>
    !props.selected &&
    css`
      &:hover {
        background: ${(props) => props.theme['base-hover']};
        color: ${(props) => props.theme['base-subtitle']};
      }
    `}

  ${(props) =>
    props.selected &&
    css`
      background: ${(props) => props.theme['purple-light']};
      border: 1px solid ${(props) => props.theme.purple};
    `}

  svg {
    color: ${(props) => props.theme.purple};
  }
`;
