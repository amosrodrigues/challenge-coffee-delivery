import { useContext } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ShoppingContext } from '../../contexts/ShoppingContext'
import { CheckoutForm } from './CheckoutForm'
import { ShoppingCart } from './ShoppingCart'
import { CheckoutContainer, LeftSection, RightSection } from './styles'

import { dynatraceCustomError, dtRum } from '../../index'

import { zodResolver } from '@hookform/resolvers/zod'

import * as zod from 'zod'
import { EmptyCart } from './EmptyCart'

class ErroDeAutenticacao extends Error {
  statusCode?: any
  column?: number
  line?: number
  file?: string
  constructor(mensagem: string | undefined, codigo: any) {
    // É aqui que a mensagem é passada para o objeto Error nativo
    super(mensagem); 

    // Opcional: Customiza o nome e adiciona outras propriedades
    this.file = "file";
    this.line = 10;
    this.column = 20;
    this.stack = "stack trace";

    this.name = 'ErroDeAutenticacao';
    this.statusCode = codigo;
  }
}

const orderFormValidationSchema = zod.object({
  cep: zod.string().regex(/^[0-9]{5}-[0-9]{3}$/, 'Campo obrigatório'),
  street: zod.string().min(1, 'Campo obrigatório'),
  streetNumber: zod.string().min(1, 'Campo obrigatório'),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'Campo obrigatório'),
  city: zod.string().min(1, 'Campo obrigatório'),
  uf: zod.string().regex(/^[A-Za-z]{2}$/, 'Campo obrigatório'),
  paymentType: zod.enum(['credit', 'debit', 'money']),
})

type orderFormData = zod.infer<typeof orderFormValidationSchema>

export function Checkout() {
  const { shouldEmptyCart, generateOrder, cart } = useContext(ShoppingContext)
  const navigate = useNavigate()

  const orderForm = useForm<orderFormData>({
    resolver: zodResolver(orderFormValidationSchema),
    defaultValues: {
      paymentType: 'credit',
    },
  })

  const { handleSubmit } = orderForm

  const handleSubmitForm: SubmitHandler<orderFormData> = async (
    data: orderFormData,
    event,
  ) => {
    event?.preventDefault()
    
    const customError = 'Error on submit order form!!!'
    
    try {
      throw new ErroDeAutenticacao('Objeto Customizado. Verifique suas propriedas 123', 400);
      // throw new Error("Credenciais inválidas. Verifique seu usuário e senha.");
    } catch (error) {
      dynatraceCustomError(customError)
      dynatraceCustomError(error as Error)
      dynatraceCustomError({ name: 'CustomError', message: 'Error on submit order form 123456', line: 10, column: 20, stack: 'stack trace' })
      dtRum?.reportCustomError('Falha','Dados informados incorretamente', 'Erro ao enviar o formulário de cadastro', true);
    }
     
    await new Promise((resolve) => setTimeout(resolve, 2000))
    navigate('/success')
    generateOrder(data)
    shouldEmptyCart()
  }

  return (
    <CheckoutContainer>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <FormProvider {...orderForm}>
            <LeftSection>
              <h2>Complete seu pedido</h2>

              <CheckoutForm />
            </LeftSection>

            <RightSection>
              <h2>Cafés selecionados</h2>

              <ShoppingCart />
            </RightSection>
          </FormProvider>
        </form>
      )}
    </CheckoutContainer>
  )
}
