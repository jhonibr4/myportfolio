import { RiArrowRightSLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import {
  ButtonView,
  ButtonViewCertificate,
  CardSchool,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  ImageSchoolCurse,
  LabelCode,
  LabelHour,
  TextHour,
  TitleSchool,
  WrapperHours,
  WrapperInfoCertificate,
  WrapperTechsCourses,
} from "./styles";
import { ICourse } from "../../../../interface/Course";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { ItemTech } from "../../../../components/ItemTech";

export function CardCourse({
  name,
  duration,
  imageSchool,
  imageCertificate,
  codeCertificate,
  techs,
  link,
}: ICourse) {
  function handleCourse(
    name: string,
    duration: number,
    imageCertificate: string
  ) {
    setOpen(true);
    console.log(name, duration, imageCertificate);
  }

  const [open, setOpen] = useState(false);

  return (
    <CardSchool>
      <ImageSchoolCurse src={imageSchool} />
      <TitleSchool>{name}</TitleSchool>
      <WrapperHours>
        <LabelHour>Duração:</LabelHour>
        <TextHour>{duration} horas no total</TextHour>
      </WrapperHours>
      <ButtonView onClick={() => handleCourse(name, duration, imageSchool)}>
        Ver Certificado
        <RiArrowRightSLine />
      </ButtonView>
      <DialogRoot open={open}>
        <DialogTrigger>
          <DialogPortal>
            <DialogOverlay>
              <DialogContent>
                <img src={imageCertificate} alt="" />

                <WrapperInfoCertificate>
                  <DialogClose onClick={() => setOpen(false)}>
                    <AiOutlineClose />
                  </DialogClose>
                  <DialogTitle>Certificado</DialogTitle>
                  <LabelCode>
                    Código: <p>{codeCertificate}</p>
                  </LabelCode>
                  <DialogTitle>Principais Tecnologias</DialogTitle>
                  <WrapperTechsCourses>
                    {techs.map((tech, i) => (
                      <ItemTech id={i} key={i} tech={tech} />
                    ))}
                  </WrapperTechsCourses>
                  <ButtonViewCertificate href={link} target="_blank">
                    Ver certificado no site
                    <FiExternalLink />
                  </ButtonViewCertificate>
                </WrapperInfoCertificate>
              </DialogContent>
            </DialogOverlay>
          </DialogPortal>
        </DialogTrigger>
      </DialogRoot>
    </CardSchool>
  );
}
