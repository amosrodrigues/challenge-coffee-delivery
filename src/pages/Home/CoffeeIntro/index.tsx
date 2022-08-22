import {
  Background,
  CoffeeIntroContainer,
  IconItem,
  IntroItemsContainer,
  IntroTextConteinar,
} from './styles';

import imageRightIntro from '../../../assets/image-right-intro.svg';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

export function CoffeeIntro() {
  return (
    <CoffeeIntroContainer>
      <div>
        <IntroTextConteinar>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </IntroTextConteinar>

        <IntroItemsContainer>
          <div>
            <IconItem iconBackgroundColor="yellowDark">
              <ShoppingCart weight="fill" />
            </IconItem>
            <span>Compra simples e segura</span>
          </div>

          <div>
            <IconItem iconBackgroundColor="baseText">
              <Package weight="fill" />
            </IconItem>
            <span>Embalagem mantém o café intacto</span>
          </div>

          <div>
            <IconItem iconBackgroundColor="yellow">
              <Timer weight="fill" />
            </IconItem>
            <span>Entrega rápida e rastreada</span>
          </div>

          <div>
            <IconItem iconBackgroundColor="purple">
              <Coffee weight="fill" />
            </IconItem>
            <span>O café chega fresquinho até você</span>
          </div>
        </IntroItemsContainer>
      </div>

      <img src={imageRightIntro} alt="" />

      <Background />
    </CoffeeIntroContainer>
  );
}
