import { useEffect, useState } from 'react'
import { IProject } from '../../../../interface/Projects'
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
  WrapperButton,
  WrapperAllInfos,
} from './styles'

import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineWeb,
} from 'react-icons/md'
import { RiArrowRightSLine } from 'react-icons/ri'
import { BsGithub } from 'react-icons/bs'
import { FiFigma } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

import { ItemTech } from '../../../../components/ItemTech'

export function CardProject({
  imageLogo,
  name,
  description,
  imagesProject,
  techs,
  link,
  typeProject,
}: IProject) {
  const [open, setOpen] = useState(false)
  const [imageSelected, setImageSelected] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!isLoaded) {
      const element = document.getElementById(`${name}${imageSelected}`)
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      })
      console.log(element)
    }
  }, [isLoaded, imageSelected])

  function handleScrollImages(button: string) {
    setIsLoaded(false)
    if (button === 'prev') {
      if (imageSelected > 0) {
        setImageSelected(imageSelected - 1)
      } else if (imageSelected === 0) {
        setImageSelected(imagesProject.length - 1)
      }
    } else {
      if (imageSelected < imagesProject.length - 1) {
        setImageSelected(imageSelected + 1)
      } else if (imageSelected === imagesProject.length - 1) {
        setImageSelected(0)
      }
    }
  }
  function typeButton() {
    if (typeProject === 'github') {
      return (
        <ButtonViewProjectGithub href={link} target="_blank">
          Ver Projeto no Github
          <BsGithub />
        </ButtonViewProjectGithub>
      )
    } else if (typeProject === 'figma') {
      return (
        <ButtonViewProjectGithub href={link} target="_blank">
          Ver Projeto no Figma
          <FiFigma />
        </ButtonViewProjectGithub>
      )
    } else {
      return (
        <ButtonViewProjectGithub href={link} target="_blank">
          Ver site do projeto
          <MdOutlineWeb />
        </ButtonViewProjectGithub>
      )
    }
  }

  return (
    <Card id={name}>
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
                    <ButtonPrev onClick={() => handleScrollImages('prev')}>
                      <MdKeyboardArrowLeft />
                    </ButtonPrev>
                    {imagesProject.map((image, i) => (
                      <ImageProject id={`${name}${i}`} key={i} src={image} />
                    ))}
                    <ButtonNext onClick={() => handleScrollImages('next')}>
                      <MdKeyboardArrowRight />
                    </ButtonNext>
                  </WrapperImageProject>
                  <WrapperAllInfos>
                    <DialogTitle>{name}</DialogTitle>
                    <SecondTitle>Principais Tecnologias</SecondTitle>
                    <WrapperTechsProject>
                      {techs.map((tech, i) => (
                        <ItemTech id={i} key={i} tech={tech} />
                      ))}
                    </WrapperTechsProject>
                  </WrapperAllInfos>
                  <WrapperButton>{typeButton()}</WrapperButton>
                </DialogContent>
              </DialogOverlay>
            </DialogPortal>
          </DialogTrigger>
        </DialogRoot>
      </WrapperInfoProject>
    </Card>
  )
}
