import { InputHTMLAttributes } from 'react';

import { FieldError } from 'react-hook-form';
import { InpuntStyled } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name?: string;
  label?: string;
  error?: FieldError | null;
};

export function Input({ name, label, error = null, ...props }: InputProps) {
  return (
    <>
      {!!label && <label htmlFor={name}>{label}</label>}
      <InpuntStyled id={name} name={name} {...props} />
      {!!error && <span>{error.message}</span>}
    </>
  );
}
