import { useState } from 'react'
import {
  ContainerMenu,
  WrapperButton,
  ImageLogo,
  ButtonOpenMenu,
} from './styles'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'
import { HiHome, HiOutlineDesktopComputer } from 'react-icons/hi'
import { FaUserGraduate, FaUser } from 'react-icons/fa'
import { BsCodeSlash } from 'react-icons/bs'
import { IoMailSharp } from 'react-icons/io5'
import Logo from '../../../../assets/LogoWhite.svg'
import { useMediaQuery } from '../../../../hooks/useQueryMedia'
import { useTheme } from 'styled-components'
import { NavLink } from './components/NavLink'
import { SelectedPage } from '../../../../shared/types'

export function Menu() {
  const theme = useTheme()
  const isDeviceLaptopSmall = useMediaQuery(theme.device.laptopS)
  const [isOpen, setIsOpen] = useState(false)

  // useEffect(() => {
  //   if (isLoaded) {
  //     const element = document.getElementById(screenSelected)
  //     element?.scrollIntoView({
  //       behavior: 'smooth',
  //     })
  //     console.log(element)
  //   }
  // }, [isLoaded, screenSelected])

  // function handleScrollScreen(buttton: string, page: string) {
  //   setIsLoaded(true)
  //   setScreenSelected(page)
  //   setButtonSelected(buttton)
  // }

  return (
    <>
      <ContainerMenu open={isOpen}>
        <ImageLogo src={Logo} />
        <WrapperButton>
          <NavLink
            textButton="Home"
            name={SelectedPage.Home}
            icon={<HiHome />}
          />
          <NavLink
            textButton="Informações"
            name={SelectedPage.Infos}
            icon={<FaUser />}
          />
          <NavLink
            textButton="Graduações"
            name={SelectedPage.Graduation}
            icon={<FaUserGraduate />}
          />
          <NavLink
            textButton="Tecnologias"
            name={SelectedPage.Techs}
            icon={<BsCodeSlash />}
          />
          <NavLink
            textButton="Projetos"
            name={SelectedPage.Projects}
            icon={<HiOutlineDesktopComputer />}
          />
          <NavLink
            textButton="Contato"
            name={SelectedPage.Contact}
            icon={<IoMailSharp />}
          />
        </WrapperButton>
        {isDeviceLaptopSmall && (
          <ButtonOpenMenu onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? <RxHamburgerMenu /> : <RxCross1 />}
          </ButtonOpenMenu>
        )}
      </ContainerMenu>
    </>
  )
}
