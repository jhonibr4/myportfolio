import styled from 'styled-components'

interface ISizeImg {
  size: number
}

export const ImgFigure = styled.img<ISizeImg>`
  width: ${({ size }) => `${size}rem`};
  @media ${({ theme }) => theme.device.laptopL} {
    width: ${({ size }) => `${size / 1.2}rem`};
  }
  @media ${({ theme }) => theme.device.laptopM} {
    width: ${({ size }) => `${size / 1.4}rem`};
  }
  @media ${({ theme }) => theme.device.laptopS} {
    width: ${({ size }) => `${size / 1.5}rem`};
    margin-top: 4rem;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    width: ${({ size }) => `${size / 2}rem`};
    margin-top: 4rem;
  }
`
