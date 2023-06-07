import { useState } from 'react'
import {
  ContainerMenu,
  ButtonMenu,
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

export function Menu() {
  const [buttonSelected, setButtonSelected] = useState<string>('buttonHome')

  window.addEventListener('scroll', function () {
    if (this.scrollY > 100 && this.scrollY < 300) {
      setButtonSelected('buttonHome')
    } else if (this.scrollY > 720 && this.scrollY < 920) {
      setButtonSelected('buttonProfile')
    } else if (this.scrollY > 1600 && this.scrollY < 1800) {
      setButtonSelected('buttonGraduation')
    } else if (this.scrollY > 2300 && this.scrollY < 2400) {
      setButtonSelected('buttonTechs')
    } else if (this.scrollY > 3120 && this.scrollY < 3720) {
      setButtonSelected('buttonProjects')
    } else if (this.scrollY > 4380 && this.scrollY < 4714) {
      setButtonSelected('buttonContact')
    }
  })

  const theme = useTheme()
  const isLaptopSmall = useMediaQuery(theme.device.laptopS)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <ContainerMenu open={isOpen}>
        <ImageLogo src={Logo} />
        <WrapperButton>
          <ButtonMenu
            onClick={() => setButtonSelected('buttonHome')}
            className="button"
            style={
              buttonSelected === 'buttonHome'
                ? { backgroundColor: 'white', color: '#9F51BA' }
                : { backgroundColor: 'transparent', color: 'white' }
            }
          >
            <HiHome />
            {isLaptopSmall && 'Home'}
          </ButtonMenu>
          <ButtonMenu
            className="button"
            onClick={() => setButtonSelected('buttonProfile')}
            style={
              buttonSelected === 'buttonProfile'
                ? { backgroundColor: 'white', color: '#9F51BA' }
                : { backgroundColor: 'transparent', color: 'white' }
            }
          >
            <FaUser />
            {isLaptopSmall && 'Informações'}
          </ButtonMenu>
          <ButtonMenu
            className="button"
            onClick={() => setButtonSelected('buttonGraduation')}
            style={
              buttonSelected === 'buttonGraduation'
                ? { backgroundColor: 'white', color: '#9F51BA' }
                : { backgroundColor: 'transparent', color: 'white' }
            }
          >
            <FaUserGraduate />
            {isLaptopSmall && 'Graduação'}
          </ButtonMenu>
          <ButtonMenu
            className="button"
            onClick={() => setButtonSelected('buttonTechs')}
            style={
              buttonSelected === 'buttonTechs'
                ? { backgroundColor: 'white', color: '#9F51BA' }
                : { backgroundColor: 'transparent', color: 'white' }
            }
          >
            <BsCodeSlash />
            {isLaptopSmall && 'Tecnologias'}
          </ButtonMenu>
          <ButtonMenu
            className="button"
            onClick={() => setButtonSelected('buttonProjects')}
            style={
              buttonSelected === 'buttonProjects'
                ? { backgroundColor: 'white', color: '#9F51BA' }
                : { backgroundColor: 'transparent', color: 'white' }
            }
          >
            <HiOutlineDesktopComputer />
            {isLaptopSmall && 'Projetos'}
          </ButtonMenu>
          <ButtonMenu
            className="button"
            onClick={() => setButtonSelected('buttonContact')}
            style={
              buttonSelected === 'buttonContact'
                ? { backgroundColor: 'white', color: '#9F51BA' }
                : { backgroundColor: 'transparent', color: 'white' }
            }
          >
            <IoMailSharp />
            {isLaptopSmall && 'Contato'}
          </ButtonMenu>
        </WrapperButton>
        {isLaptopSmall && (
          <ButtonOpenMenu onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? <RxHamburgerMenu /> : <RxCross1 />}
          </ButtonOpenMenu>
        )}
      </ContainerMenu>
    </>
  )
}
