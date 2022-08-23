import { MapPinLine } from 'phosphor-react';
import {
  Address,
  AddressHeader,
  FormContainer,
  Payment,
  AddressLocation,
  AddressFields,
} from './styles';

export function CheckoutForm() {
  return (
    <FormContainer>
      <Address>
        <AddressHeader>
          <MapPinLine size={22} />
          <AddressLocation>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </AddressLocation>
        </AddressHeader>

        <AddressFields></AddressFields>
      </Address>

      <Payment></Payment>
    </FormContainer>
  );
}
