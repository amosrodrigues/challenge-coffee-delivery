export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export const priceFormatterOnly = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
})
