import {
  ButtonSocialMidia,
  ContainerFooter,
  ImageLogo,
  TextLicense,
  WrapperLicense,
  WrapperSocialMidia,
} from './styles'

import { BsInstagram, BsGithub } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'

import LogoPurple from '../../../../assets/LogoPurple.svg'

export function Footer() {
  return (
    <ContainerFooter>
      <WrapperLicense>
        <ImageLogo src={LogoPurple} />
        <TextLicense>
          © 2023 Jhonathan Felix Braz, Todos os direitos reservados.
        </TextLicense>
      </WrapperLicense>
      <WrapperSocialMidia>
        <ButtonSocialMidia href="https://github.com/jhonibr4" target="_blank">
          <BsGithub />
        </ButtonSocialMidia>
        <ButtonSocialMidia
          href="https://www.linkedin.com/in/jhonathanfb/"
          target="_blank"
        >
          <FaLinkedin />
        </ButtonSocialMidia>
        <ButtonSocialMidia
          href="https://www.instagram.com/jhon_felixx30/"
          target="_blank"
        >
          <BsInstagram />
        </ButtonSocialMidia>
      </WrapperSocialMidia>
    </ContainerFooter>
  )
}
