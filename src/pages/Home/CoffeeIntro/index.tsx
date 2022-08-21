import { Background, CoffeeIntroContainer } from './styles';

import imageRightIntro from '../../../assets/image-right-intro.svg';

export function CoffeeIntro() {
  return (
    <CoffeeIntroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
      </div>

      <img src={imageRightIntro} alt="" />

      <Background />
    </CoffeeIntroContainer>
  );
}
