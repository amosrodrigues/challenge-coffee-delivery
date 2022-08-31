import { CoffeeIntro } from './CoffeeIntro'
import { CoffeeList } from './CoffeList'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <CoffeeIntro />
      <CoffeeList />
    </HomeContainer>
  )
}
