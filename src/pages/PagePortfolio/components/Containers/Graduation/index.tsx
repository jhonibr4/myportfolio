import { useContext, useEffect, useState } from 'react'
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
import { ScrollContext } from '../../../../../context/ScrollContext'
import { SelectedPage } from '../../../../../shared/types'

export function Graduation() {
  const theme = useTheme()
  const { changeSelectedPage } = useContext(ScrollContext)

  const isDeviceMobile = useMediaQuery(theme.device.tabletL)
  const [cardSelected, setCardSelected] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (isLoaded) {
      const element = document.getElementById(
        dataCourse[cardSelected].nameSchool
      )
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      })
      console.log(element)
    }
  }, [isLoaded, cardSelected])

  function handleScrollCards(button: string) {
    setIsLoaded(true)
    if (button === 'prev') {
      if (cardSelected > 0) {
        setCardSelected(cardSelected - 1)
      } else if (cardSelected === 0) {
        setCardSelected(dataCourse.length - 1)
      }
    } else {
      if (cardSelected < dataCourse.length - 1) {
        setCardSelected(cardSelected + 1)
      } else if (cardSelected === dataCourse.length - 1) {
        setCardSelected(0)
      }
    }
  }

  return (
    <ContentScreen id="graduation">
      <TitleContent title="Formação" />
      <WrapperGraduation
        onViewportEnter={() => changeSelectedPage(SelectedPage.Graduation)}
        whileInView="visible"
        initial="hidden"
        transition={{ ease: 'easeInOut', duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -150 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {isDeviceMobile && (
          <WrapperButtonsCard>
            <ButtonPrev onClick={() => handleScrollCards('prev')}>
              <MdKeyboardArrowLeft />
            </ButtonPrev>
            <ButtonNext onClick={() => handleScrollCards('next')}>
              <MdKeyboardArrowRight />
            </ButtonNext>
          </WrapperButtonsCard>
        )}
        <WrapperCards>
          {dataCourse.map((data, i) => (
            <CardCourse
              key={i}
              nameSchool={data.nameSchool}
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

        <ImgJF image={ArtJF} size={20} animation={100} position={0} />
      </WrapperGraduation>
    </ContentScreen>
  )
}
