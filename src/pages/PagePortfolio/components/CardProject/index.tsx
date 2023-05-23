import { useState } from "react";
import { IProject } from "../../../../interface/Projects";
import {
  ButtonViewProject,
  Card,
  DescriptionProject,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTrigger,
  ImageLogoProject,
  ImageProject,
  NameProject,
  WrapperImage,
  WrapperImageProject,
  WrapperInfoProject,
  ButtonPrev,
  ButtonNext,
  DialogTitle,
  WrapperTechsProject,
  SecondTitle,
  ButtonViewProjectGithub,
} from "./styles";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { ItemTech } from "../../../../components/ItemTech";

export function CardProject({
  imageLogo,
  name,
  description,
  imagesProject,
  techs,
  link,
}: IProject) {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  function handleChangeImage(action: string) {
    if (action === "next") {
      if (imagesProject.length - 1 > currentImage) {
        setCurrentImage(currentImage + 1);
      }
    } else {
      if (currentImage > 0) {
        setCurrentImage(currentImage - 1);
      }
    }
  }

  return (
    <Card>
      <WrapperImage>
        <ImageLogoProject src={imageLogo} />
      </WrapperImage>
      <WrapperInfoProject>
        <NameProject>{name}</NameProject>
        <DescriptionProject>{description}</DescriptionProject>
        <ButtonViewProject onClick={() => setOpen(true)}>
          Ver Projeto <RiArrowRightSLine />
        </ButtonViewProject>
        <DialogRoot open={open}>
          <DialogTrigger>
            <DialogPortal>
              <DialogOverlay>
                <DialogContent>
                  <DialogClose onClick={() => setOpen(false)}>
                    <AiOutlineClose />
                  </DialogClose>
                  <WrapperImageProject>
                    <ButtonPrev onClick={() => handleChangeImage("prev")}>
                      <MdKeyboardArrowLeft />
                    </ButtonPrev>
                    <ImageProject src={imagesProject[currentImage]} />
                    <ButtonNext onClick={() => handleChangeImage("next")}>
                      <MdKeyboardArrowRight />
                    </ButtonNext>
                  </WrapperImageProject>
                  <DialogTitle>{name}</DialogTitle>
                  <SecondTitle>Principais Tecnologias</SecondTitle>
                  <WrapperTechsProject>
                    {techs.map((tech, i) => (
                      <ItemTech id={i} key={i} tech={tech} />
                    ))}
                  </WrapperTechsProject>
                  <ButtonViewProjectGithub href={link} target="_blank">
                    Ver Projeto no Github
                    <BsGithub />
                  </ButtonViewProjectGithub>
                </DialogContent>
              </DialogOverlay>
            </DialogPortal>
          </DialogTrigger>
        </DialogRoot>
      </WrapperInfoProject>
    </Card>
  );
}
