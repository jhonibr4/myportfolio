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
import { useContext } from 'react'
import { ScrollContext } from '../../../../../context/ScrollContext'
import { SelectedPage } from '../../../../../shared/types'

export function Contact() {
  const { changeSelectedPage } = useContext(ScrollContext)

  return (
    <ContentScreen id="contact">
      <WrapperForm
        onViewportEnter={() => changeSelectedPage(SelectedPage.Contact)}
        whileInView="visible"
        initial="hidden"
        transition={{ ease: 'easeInOut', duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -150 },
          visible: { opacity: 1, x: 0 },
        }}
      >
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

      <ImgJF image={ArtJF} size={35} position={0} animation={100} />
    </ContentScreen>
  )
}
