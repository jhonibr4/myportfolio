import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-toastify/dist/ReactToastify.min.css'
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
import { useContext, useState } from 'react'
import { ScrollContext } from '../../../../../context/ScrollContext'
import { SelectedPage } from '../../../../../shared/types'

export function Contact() {
  const { changeSelectedPage } = useContext(ScrollContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const error = () =>
    toast.error('Algum campo está vazio, tente novamente!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })
  const success = () =>
    toast.success('Email enviado com sucesso!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })
  function sendEmail() {
    if (name === '' || message === '' || email === '') {
      error()
      return
    }

    const templateParams = {
      from_name: name,
      message,
      email,
    }
    emailjs
      .send(
        'service_vb88sbm',
        'template_jdzkjow',
        templateParams,
        '5ciiyhMZXGpVA0nc3'
      )
      .then((res) => {
        success()
        setName('')
        setEmail('')
        setMessage('')
      })
      .catch((err) => console.log('Algo deu errado tente novamente', err))
  }

  return (
    <ContentScreen id="contact">
      <ToastContainer />
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
          <InputForm value={name} onChange={(e) => setName(e.target.value)} />

          <LabelInput>E-mail</LabelInput>
          <InputForm value={email} onChange={(e) => setEmail(e.target.value)} />
          <LabelInput>Mensagem</LabelInput>
          <TextAreaForm
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <ButtonSend onClick={() => sendEmail()}>Enviar</ButtonSend>
        </WrapperInputs>
      </WrapperForm>

      <ImgJF image={ArtJF} size={35} position={0} animation={100} />
    </ContentScreen>
  )
}
