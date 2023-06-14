import { ContentScreen, WrapperCardsProject } from './styles'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

import { CardProject } from '../../CardProject'
import { TitleContent } from '../../../../../components/TitleContent'

import { dataProjects } from '../../../../../databases/dataProjects'
import {
  ButtonChangeProject,
  WrapperChangeProject,
} from '../../CardProject/styles'
import { useTheme } from 'styled-components'
import { useMediaQuery } from '../../../../../hooks/useQueryMedia'
import { useState, useEffect, useContext } from 'react'
import { ScrollContext } from '../../../../../context/ScrollContext'
import { SelectedPage } from '../../../../../shared/types'

export function Projects() {
  const { changeSelectedPage } = useContext(ScrollContext)
  const theme = useTheme()
  const isDeviceMobile = useMediaQuery(theme.device.mobileL)

  const [cardSelected, setCardSelected] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (isLoaded) {
      const element = document.getElementById(dataProjects[cardSelected].name)
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      })
      console.log(element)
    }
  }, [isLoaded, cardSelected])

  function handleScrollProjects(button: string) {
    setIsLoaded(true)
    if (button === 'prev') {
      if (cardSelected > 0) {
        setCardSelected(cardSelected - 1)
      } else if (cardSelected === 0) {
        setCardSelected(dataProjects.length - 1)
      }
    } else {
      if (cardSelected < dataProjects.length - 1) {
        setCardSelected(cardSelected + 1)
      } else if (cardSelected === dataProjects.length - 1) {
        setCardSelected(0)
      }
    }
  }

  return (
    <ContentScreen id="projects">
      <TitleContent title="Projetos" />
      <WrapperCardsProject
        onViewportEnter={() => changeSelectedPage(SelectedPage.Projects)}
        whileInView="visible"
        initial="hidden"
        transition={{ ease: 'easeInOut', duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {dataProjects.map((project) => (
          <CardProject
            key={project.id}
            id={project.id}
            imageLogo={project.imageLogo}
            name={project.name}
            description={project.description}
            imagesProject={project.imagesProject}
            techs={project.techs}
            link={project.link}
          ></CardProject>
        ))}
      </WrapperCardsProject>
      {isDeviceMobile && (
        <WrapperChangeProject>
          <ButtonChangeProject onClick={() => handleScrollProjects('prev')}>
            <MdKeyboardArrowLeft />
          </ButtonChangeProject>
          <ButtonChangeProject onClick={() => handleScrollProjects('next')}>
            <MdKeyboardArrowRight />
          </ButtonChangeProject>
        </WrapperChangeProject>
      )}
    </ContentScreen>
  )
}
