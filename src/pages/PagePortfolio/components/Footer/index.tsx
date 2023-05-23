import {
  ButtonSocialMidia,
  ContainerFooter,
  ImageLogo,
  TextLicense,
  WrapperLicense,
  WrapperSocialMidia,
} from "./styles";

import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

import LogoPurple from "../../../../assets/LogoPurple.svg";

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
        <ButtonSocialMidia>
          <BsGithub />
        </ButtonSocialMidia>
        <ButtonSocialMidia>
          <FaLinkedin />
        </ButtonSocialMidia>
        <ButtonSocialMidia>
          <BsInstagram />
        </ButtonSocialMidia>
      </WrapperSocialMidia>
    </ContainerFooter>
  );
}
