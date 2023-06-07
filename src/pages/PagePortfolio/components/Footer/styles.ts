import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  background-color: ${({ theme }) => theme['black-800']};
  height: 15rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media ${({ theme }) => theme.device.mobileL} {
    flex-direction: column-reverse;
  }
`
export const WrapperLicense = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`
export const ImageLogo = styled.img`
  width: 8rem;
`
export const TextLicense = styled.p`
  @media ${({ theme }) => theme.device.mobileL} {
    text-align: center;
  }
`
export const WrapperSocialMidia = styled.div`
  display: flex;
  gap: 1rem;
`
export const ButtonSocialMidia = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme['purple-400']};
  cursor: pointer;
  transition: 0.5s;
  :hover {
    background-color: ${({ theme }) => theme['purple-600']};
  }
  svg {
    font-size: 2rem;
  }
`
