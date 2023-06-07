import styled from 'styled-components'

interface IOpenedMenu {
  open: boolean
}

export const ContainerMenu = styled.div<IOpenedMenu>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  width: 4rem;
  height: 100vh;
  background-color: ${({ theme }) => theme['purple-400']};
  transition: 0.5s;
  @media ${({ theme }) => theme.device.laptopS} {
    left: ${({ open }) => (open ? '0' : '-10rem')};
    width: 10rem;
  }
`
export const ImageLogo = styled.img`
  display: flex;
  align-self: center;
  top: 20px;
  position: absolute;
  width: 80%;
`
export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 55%;
  width: 100%;
`

export const ButtonMenu = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  border-radius: 25px;
  transition: 0.5s;

  cursor: pointer;

  svg {
    transition: 0.1s;
    border-radius: 50%;
    padding: 0.5rem;
    font-size: 2rem;
  }
  @media ${({ theme }) => theme.device.laptopS} {
    padding-right: 0.5rem;
    width: 90%;
  }
`
export const ButtonOpenMenu = styled.button`
  position: absolute;
  z-index: 2;
  left: 10rem;
  top: 2rem;
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme['purple-400']};
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;

  svg {
    font-size: 1.5rem;
    transition: 0.5s;
  }
`
