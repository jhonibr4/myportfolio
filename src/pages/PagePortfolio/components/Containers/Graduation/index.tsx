import { TitleContent } from '../../../../../components/TitleContent'
import { CardCourse } from '../../CardCourse'
import {
  ButtonNext,
  ButtonPrev,
  ContentScreen,
  WrapperButtonsCard,
  WrapperCards,
  WrapperGraduation,
} from './styles'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

import ArtJF from '../../../../../assets/ArtsJF/artJF2.svg'
import { ImgJF } from '../../../../../components/ImgJF'

import { dataCourse } from '../../../../../databases/dataCourses'
import { useTheme } from 'styled-components'
import { useMediaQuery } from '../../../../../hooks/useQueryMedia'

export function Graduation() {
  const theme = useTheme()

  const isDeviceMobile = useMediaQuery(theme.device.tabletL)

  return (
    <ContentScreen>
      <TitleContent title="Formação" />
      <WrapperGraduation>
        <WrapperButtonsCard>
          {isDeviceMobile && (
            <ButtonPrev>
              <MdKeyboardArrowLeft />
            </ButtonPrev>
          )}
          <WrapperCards>
            {dataCourse.map((data) => (
              <CardCourse
                key={data.id}
                name={data.title}
                duration={data.duration}
                imageSchool={data.imgSchool}
                imageCertificate={data.imgCertificate}
                codeCertificate={data.code}
                techs={data.techs}
                link={data.link}
              />
            ))}
          </WrapperCards>
          {isDeviceMobile && (
            <ButtonNext>
              <MdKeyboardArrowRight />
            </ButtonNext>
          )}
        </WrapperButtonsCard>

        <ImgJF image={ArtJF} size={20} />
      </WrapperGraduation>
    </ContentScreen>
  )
}
