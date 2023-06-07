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

export function Presentation() {
  const theme = useTheme()

  const isDeviceMobile = useMediaQuery(theme.device.laptopS)

  return (
    <ContentScreen>
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
          <ButtonWhatsApp>
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
