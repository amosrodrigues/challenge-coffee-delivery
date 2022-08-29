import { X } from 'phosphor-react';
import {
  ActionButton,
  ActionsButtons,
  ButtonClose,
  Content,
  ModalDeletionContainer,
  Overlay,
} from './styles';

interface ModalDeletionProps {
  onActiveModal: { isOpen: boolean; idSelected: number };
  onRemoveItem: () => void;
  onClose: () => void;
}

export function ModalDeletion({
  onClose,
  onRemoveItem,
  onActiveModal,
}: ModalDeletionProps) {
  return (
    <ModalDeletionContainer isOpen={onActiveModal.isOpen}>
      <Overlay />
      <Content>
        <ButtonClose type="button" onClick={onClose}>
          <X size={24} weight="bold" />
        </ButtonClose>
        <h3>REMOVER PRODUTO</h3>
        <p>Você tem certeza que deseja remover este produto do carrinho?</p>

        <ActionsButtons>
          <ActionButton type="button" onClick={onClose} outline>
            NÃO
          </ActionButton>
          <ActionButton type="button" onClick={onRemoveItem}>
            SIM
          </ActionButton>
        </ActionsButtons>
      </Content>
    </ModalDeletionContainer>
  );
}
