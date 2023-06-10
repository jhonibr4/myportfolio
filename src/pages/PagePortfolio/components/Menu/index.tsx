import { useState, useEffect } from 'react'
import {
  ContainerMenu,
  ButtonMenu,
  WrapperButton,
  ImageLogo,
  ButtonOpenMenu,
  TextButton,
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
  const [screenSelected, setScreenSelected] = useState<string>('presentation')
  const [buttonSelected, setButtonSelected] = useState<string>('presentation')
  const [isLoaded, setIsLoaded] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [teste, setTeste] = useState(0)

  const theme = useTheme()
  const isDeviceLaptopLarge = useMediaQuery(theme.device.laptopL)
  const isDeviceLaptopMedium = useMediaQuery(theme.device.laptopM)
  const isDeviceLaptopSmall = useMediaQuery(theme.device.laptopS)
  const isDeviceMobileLarge = useMediaQuery(theme.device.mobileL)

  useEffect(() => {
    if (isLoaded) {
      const element = document.getElementById(screenSelected)
      element?.scrollIntoView({
        behavior: 'smooth',
      })
      console.log(element)
    }
  }, [isLoaded, screenSelected])

  function handleScrollScreen(buttton: string, page: string) {
    setIsLoaded(true)
    setScreenSelected(page)
    setButtonSelected(buttton)
    window.addEventListener('click', function (e) {
      setTeste(this.scrollY)
      console.log(this.screenY)
    })
  }

  window.addEventListener('scroll', function (e) {
    if (isDeviceLaptopLarge) {
      if (this.scrollY >= 0 && this.scrollY < 100) {
        setButtonSelected('presentation')
      } else if (this.scrollY > 677 && this.scrollY < 720) {
        setButtonSelected('infos')
      } else if (this.scrollY > 1355 && this.scrollY < 1390) {
        setButtonSelected('graduation')
      } else if (this.scrollY > 2148 && this.scrollY < 2190) {
        setButtonSelected('techs')
      } else if (this.scrollY > 2826 && this.scrollY < 2880) {
        setButtonSelected('projects')
      } else if (this.scrollY > 3983 && this.scrollY < 4020) {
        setButtonSelected('contact')
      }
    }
    if (isDeviceLaptopMedium) {
      if (this.scrollY >= 0 && this.scrollY < 100) {
        setButtonSelected('presentation')
      } else if (this.scrollY > 677 && this.scrollY < 720) {
        setButtonSelected('infos')
      } else if (this.scrollY > 1355 && this.scrollY < 1420) {
        setButtonSelected('graduation')
      } else if (this.scrollY > 2024 && this.scrollY < 2090) {
        setButtonSelected('techs')
      } else if (this.scrollY > 2712 && this.scrollY < 2790) {
        setButtonSelected('projects')
      } else if (this.scrollY > 3869 && this.scrollY < 3900) {
        setButtonSelected('contact')
      }
    }
    if (isDeviceLaptopSmall) {
      if (this.scrollY >= 0 && this.scrollY < 100) {
        setButtonSelected('presentation')
      } else if (this.scrollY > 678 && this.scrollY < 790) {
        setButtonSelected('infos')
      } else if (this.scrollY > 1375 && this.scrollY < 1430) {
        setButtonSelected('graduation')
      } else if (this.scrollY > 2056 && this.scrollY < 2130) {
        setButtonSelected('techs')
      } else if (this.scrollY > 2872 && this.scrollY < 2890) {
        setButtonSelected('projects')
      } else if (this.scrollY > 4545 && this.scrollY < 4645) {
        setButtonSelected('contact')
      }
    }
    if (isDeviceMobileLarge) {
      if (this.scrollY >= 0 && this.scrollY < 100) {
        setButtonSelected('presentation')
      } else if (this.scrollY > 678 && this.scrollY < 790) {
        setButtonSelected('infos')
      } else if (this.scrollY > 1375 && this.scrollY < 1430) {
        setButtonSelected('graduation')
      } else if (this.scrollY > 2056 && this.scrollY < 2130) {
        setButtonSelected('techs')
      } else if (this.scrollY > 2969 && this.scrollY < 2972) {
        setButtonSelected('projects')
      } else if (this.scrollY > 3674 && this.scrollY < 3694) {
        setButtonSelected('contact')
      }
    } else {
      if (this.scrollY >= 0 && this.scrollY < 100) {
        setButtonSelected('presentation')
      } else if (this.scrollY > 780 && this.scrollY < 820) {
        setButtonSelected('infos')
      } else if (this.scrollY > 1561 && this.scrollY < 1600) {
        setButtonSelected('graduation')
      } else if (this.scrollY > 2342 && this.scrollY < 2382) {
        setButtonSelected('techs')
      } else if (this.scrollY > 3123 && this.scrollY < 3300) {
        setButtonSelected('projects')
      } else if (this.scrollY > 4280 && this.scrollY < 4645) {
        setButtonSelected('contact')
      }
    }
  })

  return (
    <>
      <ContainerMenu open={isOpen}>
        <ImageLogo src={Logo} />
        <WrapperButton>
          <ButtonMenu
            onClick={() =>
              handleScrollScreen('presentation', 'pagePresentation')
            }
            className="button"
            style={
              buttonSelected === 'presentation'
                ? { backgroundColor: 'white', color: '#9F51BA' }
                : { backgroundColor: 'transparent', color: 'white' }
            }
          >
            <HiHome />
            {isDeviceLaptopSmall && (
              <TextButton
                style={
                  buttonSelected === 'presentation'
                    ? { color: '#9F51BA' }
                    : { color: 'white' }
                }
              >
                Home
              </TextButton>
            )}
          </ButtonMenu>

          <ButtonMenu
            className="button"
            onClick={() => handleScrollScreen('infos', 'pageInfos')}
            style={
              buttonSelected === 'infos'
                ? { backgroundColor: 'white', color: '#9F51BA' }
                : { backgroundColor: 'transparent', color: 'white' }
            }
          >
            <FaUser />
            {isDeviceLaptopSmall && (
              <TextButton
                style={
                  buttonSelected === 'infos'
                    ? { color: '#9F51BA' }
                    : { color: 'white' }
                }
              >
                Informações
              </TextButton>
            )}
          </ButtonMenu>
          <ButtonMenu
            className="button"
            onClick={() => handleScrollScreen('graduation', 'pageGraduation')}
            style={
              buttonSelected === 'graduation'
                ? { backgroundColor: 'white', color: '#9F51BA' }
                : { backgroundColor: 'transparent', color: 'white' }
            }
          >
            <FaUserGraduate />
            {isDeviceLaptopSmall && (
              <TextButton
                style={
                  buttonSelected === 'graduation'
                    ? { color: '#9F51BA' }
                    : { color: 'white' }
                }
              >
                Graduação
              </TextButton>
            )}
          </ButtonMenu>
          <ButtonMenu
            className="button"
            onClick={() => handleScrollScreen('techs', 'pageTechs')}
            style={
              buttonSelected === 'techs'
                ? { backgroundColor: 'white', color: '#9F51BA' }
                : { backgroundColor: 'transparent', color: 'white' }
            }
          >
            <BsCodeSlash />
            {isDeviceLaptopSmall && (
              <TextButton
                style={
                  buttonSelected === 'techs'
                    ? { color: '#9F51BA' }
                    : { color: 'white' }
                }
              >
                Tecnologias
              </TextButton>
            )}
          </ButtonMenu>
          <ButtonMenu
            className="button"
            onClick={() => handleScrollScreen('projects', 'pageProjects')}
            style={
              buttonSelected === 'projects'
                ? { backgroundColor: 'white', color: '#9F51BA' }
                : { backgroundColor: 'transparent', color: 'white' }
            }
          >
            <HiOutlineDesktopComputer />
            {isDeviceLaptopSmall && (
              <TextButton
                style={
                  buttonSelected === 'projects'
                    ? { color: '#9F51BA' }
                    : { color: 'white' }
                }
              >
                Projetos
              </TextButton>
            )}
          </ButtonMenu>
          <ButtonMenu
            className="button"
            onClick={() => handleScrollScreen('contact', 'pageContact')}
            style={
              buttonSelected === 'contact'
                ? { backgroundColor: 'white', color: '#9F51BA' }
                : { backgroundColor: 'transparent', color: 'white' }
            }
          >
            <IoMailSharp />
            {isDeviceLaptopSmall && (
              <TextButton
                style={
                  buttonSelected === 'contact'
                    ? { color: '#9F51BA' }
                    : { color: 'white' }
                }
              >
                Contato
              </TextButton>
            )}
          </ButtonMenu>
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
