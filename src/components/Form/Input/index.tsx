import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';

import { FieldError } from 'react-hook-form';
import { InpuntStyled } from './styles';

interface InputProps {
  name?: string;
  label?: string;
  error?: boolean;
  placeholder?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = false, ...props },
  ref,
) => {
  return (
    <>
      {!!label && <label htmlFor={name}>{label}</label>}
      <InpuntStyled id={name} name={name} error={error} {...props} ref={ref} />
      {/* {!!error && <p>{error.message}</p>} */}
    </>
  );
};

export const Input = forwardRef(InputBase);
