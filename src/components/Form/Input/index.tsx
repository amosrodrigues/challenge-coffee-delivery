import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'

import { InpuntStyled } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  label?: string
  error?: boolean
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = false, ...props },
  ref,
) => {
  return (
    <>
      {!!label && <label htmlFor={name}>{label}</label>}
      <InpuntStyled id={name} name={name} error={error} {...props} ref={ref} />
    </>
  )
}

export const Input = forwardRef(InputBase)
