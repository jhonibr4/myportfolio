import styled from 'styled-components'

interface IOpenedMenu {
  open: boolean
}

export const ContainerMenu = styled.div<IOpenedMenu>`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  width: 5rem;
  height: 100vh;
  background-color: ${({ theme }) => theme['purple-400']};
  transition: 0.5s;

  @media ${({ theme }) => theme.device.laptopS} {
    left: ${({ open }) => (open ? '0' : '-12rem')};
    width: 12rem;
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
  gap: 0.5rem;
`

export const ButtonOpenMenu = styled.button`
  position: absolute;
  z-index: 2;
  left: 12rem;
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
