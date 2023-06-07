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

export function Projects() {
  const theme = useTheme()
  const isDeviceMobile = useMediaQuery(theme.device.mobileL)

  return (
    <ContentScreen>
      <TitleContent title="Projetos" />
      <WrapperCardsProject>
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
          <ButtonChangeProject>
            <MdKeyboardArrowLeft />
          </ButtonChangeProject>
          <ButtonChangeProject>
            <MdKeyboardArrowRight />
          </ButtonChangeProject>
        </WrapperChangeProject>
      )}
    </ContentScreen>
  )
}
