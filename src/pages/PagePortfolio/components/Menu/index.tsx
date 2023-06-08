import { useState, useEffect } from 'react'
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
  const [buttonSelected, setButtonSelected] = useState<string>('presentation')
  const [isScrolling, setIsScrolling] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (isLoaded) {
      const element = document.getElementById(buttonSelected)
      element?.scrollIntoView({
        behavior: 'smooth',
      })
      console.log(element)
    }
  }, [isLoaded, buttonSelected])

  function handleScrollScreen(screen: string) {
    setIsLoaded(true)
    setIsScrolling(false)

    setButtonSelected(screen)
    setTimeout(() => {
      setIsScrolling(true)
    }, 1000)
  }

  window.addEventListener('focus', function (e) {
    console.log(e)
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
            onClick={() => handleScrollScreen('presentation')}
            className="button"
            style={
              buttonSelected === 'presentation'
                ? { backgroundColor: 'white', color: '#9F51BA' }
                : { backgroundColor: 'transparent', color: 'white' }
            }
          >
            <HiHome />
            {isLaptopSmall && 'Home'}
          </ButtonMenu>
          <ButtonMenu
            className="button"
            onClick={() => handleScrollScreen('infos')}
            style={
              buttonSelected === 'infos'
                ? { backgroundColor: 'white', color: '#9F51BA' }
                : { backgroundColor: 'transparent', color: 'white' }
            }
          >
            <FaUser />
            {isLaptopSmall && 'Informações'}
          </ButtonMenu>
          <ButtonMenu
            className="button"
            onClick={() => handleScrollScreen('graduation')}
            style={
              buttonSelected === 'graduation'
                ? { backgroundColor: 'white', color: '#9F51BA' }
                : { backgroundColor: 'transparent', color: 'white' }
            }
          >
            <FaUserGraduate />
            {isLaptopSmall && 'Graduação'}
          </ButtonMenu>
          <ButtonMenu
            className="button"
            onClick={() => handleScrollScreen('techs')}
            style={
              buttonSelected === 'techs'
                ? { backgroundColor: 'white', color: '#9F51BA' }
                : { backgroundColor: 'transparent', color: 'white' }
            }
          >
            <BsCodeSlash />
            {isLaptopSmall && 'Tecnologias'}
          </ButtonMenu>
          <ButtonMenu
            className="button"
            onClick={() => handleScrollScreen('projects')}
            style={
              buttonSelected === 'projects'
                ? { backgroundColor: 'white', color: '#9F51BA' }
                : { backgroundColor: 'transparent', color: 'white' }
            }
          >
            <HiOutlineDesktopComputer />
            {isLaptopSmall && 'Projetos'}
          </ButtonMenu>
          <ButtonMenu
            className="button"
            onClick={() => handleScrollScreen('contact')}
            style={
              buttonSelected === 'contact'
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
