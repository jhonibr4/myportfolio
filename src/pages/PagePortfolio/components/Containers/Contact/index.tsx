import { ImgJF } from "../../../../../components/ImgJF";
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
} from "./styles";

import ArtJF from "../../../../../assets/ArtsJF/artJF3.svg";

export function Contact() {
  return (
    <ContentScreen>
      <WrapperForm>
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
      <ImgJF image={ArtJF} size={25} />
    </ContentScreen>
  );
}
