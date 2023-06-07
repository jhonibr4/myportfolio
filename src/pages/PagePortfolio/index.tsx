import { ContainerMain } from './styles'

import { Menu } from './components/Menu'
import { Footer } from './components/Footer'
import { Presentation } from './components/Containers/Presentation'
import { MyInfos } from './components/Containers/MyInfos'
import { Graduation } from './components/Containers/Graduation'
import { Techs } from './components/Containers/Techs'
import { Projects } from './components/Containers/Projects'
import { Contact } from './components/Containers/Contact'

export function PagePortfolio() {
  return (
    <ContainerMain>
      <Menu />
      <Presentation />
      <MyInfos />
      <Graduation />
      <Techs />
      <Projects />
      <Contact />
      <Footer />
    </ContainerMain>
  )
}
