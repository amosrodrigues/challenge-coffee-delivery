import {
  americano,
  arabe,
  cafeComLeite,
  cafeGelado,
  capuccino,
  chocolateQuente,
  cubano,
  expressoCremoso,
  expresso,
  havaiano,
  irlandes,
  latte,
  macchiato,
  mochaccino,
} from './assets/images';

export const items = [
  {
    id: 1,
    type: 'Expresso Tradicional',
    thamb: expresso,
    description: 'O tradicional café feito com água quente e grãos moídos',
    category: ['Tradicional'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 2,
    type: 'Expresso Americano',
    thamb: americano,
    description: 'Expresso diluído, menos intenso que o tradicional',
    category: ['Tradicional'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 3,
    type: 'Expresso Cremoso',
    thamb: expressoCremoso,
    description: 'Café expresso tradicional com espuma cremosa',
    category: ['Tradicional'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 4,
    type: 'Expresso Gelado',
    thamb: cafeGelado,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    category: ['Tradicional', 'Gelado'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 5,
    type: 'Café com Leite',
    thamb: cafeComLeite,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    category: ['Tradicional', 'Com Leite'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 6,
    type: 'Latte',
    thamb: latte,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    category: ['Tradicional', 'Com Leite'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 7,
    type: 'Capuccino',
    thamb: capuccino,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    category: ['Tradicional', 'Com Leite'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 8,
    type: 'Macchiato',
    thamb: macchiato,
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    category: ['Tradicional', 'Com Leite'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 9,
    type: 'Mochaccino',
    thamb: mochaccino,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    category: ['Tradicional', 'Com Leite'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 10,
    type: 'Chocolate Quente',
    thamb: chocolateQuente,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    category: ['Especial', 'Com Leite'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 11,
    type: 'Cubano',
    thamb: cubano,
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    category: ['Especial', 'alcoólico', 'Gelado'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 12,
    type: 'Havaiano',
    thamb: havaiano,
    description: 'Bebida adocicada preparada com café e leite de coco',
    category: ['Especial'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 13,
    type: 'Árabe',
    thamb: arabe,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    category: ['Especial'],
    price: 9.9,
    quantity: 1,
  },
  {
    id: 14,
    type: 'Irlandês',
    thamb: irlandes,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    category: ['Especial', 'alcoólico'],
    price: 9.9,
    quantity: 1,
  },
];