import styled from 'styled-components'

export const ContentScreen = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme['black-800']};

  @media ${({ theme }) => theme.device.laptopS} {
    flex-direction: column-reverse;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    justify-content: space-evenly;
  }
`

export const WrapperTitle = styled.div`
  width: 50%;
  @media ${({ theme }) => theme.device.laptopS} {
    width: 70%;
  }
`
export const TitlePresentation = styled.h1`
  font-size: 3.5rem;
  span {
    font-size: 2rem;
    font-weight: 500;
  }
  .text-purple {
    font-size: 3.5rem;
    color: ${({ theme }) => theme['purple-600']};
    @media ${({ theme }) => theme.device.laptopM} {
      font-size: 2.5rem;
    }
    @media ${({ theme }) => theme.device.mobileL} {
      font-size: 1.8rem;
    }
  }
  @media ${({ theme }) => theme.device.laptopS} {
    text-align: center;
    font-size: 2rem;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 1.8rem;
  }
`
export const SubtitlePresentation = styled.p`
  margin-top: 1.5rem;
  font-size: 1.5rem;
  span {
    font-weight: bold;
    color: ${({ theme }) => theme['purple-600']};
  }
  @media ${({ theme }) => theme.device.laptopM} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  @media ${({ theme }) => theme.device.laptopS} {
    text-align: center;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 1rem;
  }
`
export const ContentImage = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 100%;
  @media ${({ theme }) => theme.device.laptopM} {
    width: 16rem;
    height: 16rem;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    width: 10.5rem;
    height: 10.5rem;
  }
`
export const WrapperButtonsPresentation = styled.div`
  display: flex;
  gap: 1rem;
  @media ${({ theme }) => theme.device.laptopS} {
    justify-content: center;
  }
`
export const ButtonWhatsApp = styled.button`
  padding-inline: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  width: 12rem;
  height: 3rem;
  background-color: ${({ theme }) => theme['purple-600']};
  transition: 0.5s;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme['purple-400']};
  }
  svg {
    font-size: 1.5rem;
    @media ${({ theme }) => theme.device.laptopS} {
    }
  }
  @media ${({ theme }) => theme.device.laptopS} {
    border-radius: 50px;
    width: 4rem;
    height: 4rem;
  }
`
export const ButtonGithub = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSize.lg};
  width: 3rem;
  height: 3rem;
  border: 2px solid ${({ theme }) => theme['purple-600']};
  background: transparent;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    border: 2px solid ${({ theme }) => theme['purple-400']};
    background-color: ${({ theme }) => theme['purple-400']};
  }
  svg {
    color: ${({ theme }) => theme.white};
    font-size: 1.5rem;
  }
  @media ${({ theme }) => theme.device.laptopS} {
    border-radius: 50px;
    width: 4rem;
    height: 4rem;
  }
`
