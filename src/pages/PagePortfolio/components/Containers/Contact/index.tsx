import { ImgJF } from '../../../../../components/ImgJF'
import {
  ButtonSend,
  ContentScreen,
  InputForm,
  LabelInput,
  SubtitleForm,
  TextAreaForm,
  TitleForm,
  WrapperForm,
  WrapperInputs,
} from './styles'

import ArtJF from '../../../../../assets/ArtsJF/artJF3.svg'
import { useTheme } from 'styled-components'
import { useMediaQuery } from '../../../../../hooks/useQueryMedia'

export function Contact() {
  const theme = useTheme()
  const isDeviceMobile = useMediaQuery(theme.device.tabletL)

  return (
    <ContentScreen id="pageContact">
      <WrapperForm>
        {isDeviceMobile && <ImgJF image={ArtJF} size={35} />}
        <TitleForm>Vamos Conversar ?</TitleForm>
        <SubtitleForm>
          Caso tenha interesse de entrar em contato para mais informações, envie
          um e-mail através do formulário abaixo!
        </SubtitleForm>
        <WrapperInputs>
          <LabelInput>Nome</LabelInput>
          <InputForm />
          <LabelInput>E-mail</LabelInput>
          <InputForm />
          <LabelInput>Mensagem</LabelInput>
          <TextAreaForm />
          <ButtonSend>Enviar</ButtonSend>
        </WrapperInputs>
      </WrapperForm>
      {!isDeviceMobile && <ImgJF image={ArtJF} size={35} />}
    </ContentScreen>
  )
}
