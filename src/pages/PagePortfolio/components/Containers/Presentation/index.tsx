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

export function Presentation() {
  const theme = useTheme()

  const isDeviceMobile = useMediaQuery(theme.device.laptopS)

  const message =
    'Olá Jhonathan Felix Braz, estou entrando em contado com você atráves do seu portifolio'

  const messageFormatted = formatterMessageWhats(message)
  return (
    <ContentScreen id="pagePresentation">
      <WrapperTitle>
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
      <ContentImage src={ImageProfile} alt="" />
    </ContentScreen>
  )
}
