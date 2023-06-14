import {
  ContentScreen,
  WrapperTitle,
  ContentImage,
  TitlePresentation,
  SubtitlePresentation,
  WrapperButtonsPresentation,
  ButtonWhatsApp,
  ButtonGithub,
} from './styles'

import ImageProfile from '../../../../../assets/imageProfile.jpeg'

import { BsWhatsapp, BsGithub } from 'react-icons/bs'
import { useMediaQuery } from '../../../../../hooks/useQueryMedia'
import { useTheme } from 'styled-components'
import { formatterMessageWhats } from '../../../../../utils/formatterMessageWhats'
import { useContext } from 'react'
import { ScrollContext } from '../../../../../context/ScrollContext'
import { SelectedPage } from '../../../../../shared/types'

export function Presentation() {
  const { changeSelectedPage } = useContext(ScrollContext)

  const theme = useTheme()

  const isDeviceMobile = useMediaQuery(theme.device.laptopS)

  const message =
    'Olá Jhonathan Felix Braz, estou entrando em contado com você atráves do seu portifolio'

  const messageFormatted = formatterMessageWhats(message)
  return (
    <ContentScreen id="home">
      <WrapperTitle
        onViewportEnter={() => changeSelectedPage(SelectedPage.Home)}
        whileInView="visible"
        initial="hidden"
        transition={{ ease: 'easeInOut', duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <TitlePresentation>
          <span>Welcome</span>
          <br /> I am <span className="text-purple"> web developer</span>
        </TitlePresentation>
        <SubtitlePresentation>
          A <span className="text-purple">Front-End Web Developer</span> and I
          am focused with following tecgnologies: React, Javascript, Typescript
          and Styled Components
        </SubtitlePresentation>
        <WrapperButtonsPresentation>
          <ButtonWhatsApp
            target="_blank"
            href={`https://wa.me/5511981625429?text=${messageFormatted}`}
          >
            <BsWhatsapp />
            {!isDeviceMobile && 'Contact Me'}
          </ButtonWhatsApp>
          <ButtonGithub target="_blank" href="https://github.com/jhonibr4">
            <BsGithub />
          </ButtonGithub>
        </WrapperButtonsPresentation>
      </WrapperTitle>
      <ContentImage
        src={ImageProfile}
        alt=""
        whileInView="visible"
        initial="hidden"
        transition={{ ease: 'easeInOut', duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
      />
    </ContentScreen>
  )
}
