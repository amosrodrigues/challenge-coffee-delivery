import styled, { css } from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const Address = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
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

  input {
    &:nth-child(1) {
      width: 12.5rem;
    }
  }

  p {
    color: red;
  }
`;

export const AddressInpunt = styled.div``;

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

  @media (max-width: 768px) {
    flex-direction: column;

    span {
      bottom: 0;
    }
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

  @media (max-width: 768px) {
    flex-direction: column;

    input:nth-child(1) {
      width: 100%;
    }
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

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

interface PaymentOptionsCardProps {
  selected?: boolean;
}

export const PaymentOptionsCard = styled.div<PaymentOptionsCardProps>`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 6px;
  font-size: 0.75rem;

  position: relative;

  label {
    position: absolute;
    background: transparent;
    cursor: pointer;
    left: 0;
    right: 0;
  }

  input[type='radio'] {
    appearance: none;
    background: transparent;
    border: 0;
    &:focus {
      box-shadow: none;
    }
  }

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

  @media (max-width: 768px) {
    width: 100%;
  }
`;
