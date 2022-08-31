import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 98;
`

interface ModalDeletionContainerProps {
  isOpen: boolean
}

export const ModalDeletionContainer = styled.div<ModalDeletionContainerProps>`
  display: ${(props) => (props.isOpen ? 'blcok' : 'none')};
`

export const Content = styled.div`
  width: 19rem;
  max-width: 60vw;

  border-radius: 6px;
  padding: 2rem;
  background: ${(props) => props.theme.background};

  position: fixed;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h3 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;
    line-height: 1.875rem;
    font-weight: 700;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.5rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    width: 100vw;
    max-width: 90vw;
  }
`

export const ActionsButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
`

interface ActionsButtonsProps {
  outline?: boolean
}

export const ActionButton = styled.button<ActionsButtonsProps>`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;

  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;

  border: 1px solid ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) =>
    props.outline ? 'transparent' : props.theme['yellow-dark']};
  user-select: none;
  color: ${(props) =>
    props.outline ? props.theme['yellow-dark'] : props.theme.white};
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  transition: filter 0.3s ease 0s;
  border-radius: 0.25rem;

  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`

export const ButtonClose = styled.button`
  display: flex;
  align-items: center;
  background: transparent;

  border: 0;
  color: ${(props) => props.theme['yellow-dark']};

  position: absolute;
  cursor: pointer;
  user-select: none;
  top: 1rem;
  right: 1rem;

  &:hover {
    filter: brightness(0.7);
  }

  &:focus {
    box-shadow: none;
  }
`
