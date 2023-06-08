import styled from 'styled-components'

import LogoBackground from '../../../../../assets/logo.svg'

export const ContentScreen = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme['purple-600']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url(${LogoBackground});
  @media ${({ theme }) => theme.device.laptopM} {
    gap: 3rem;
  }
  @media ${({ theme }) => theme.device.laptopS} {
    flex-direction: column;
    gap: 0rem;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    width: 100%;
  }
`
export const WrapperInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 45%;
  text-align: justify;
  @media ${({ theme }) => theme.device.laptopS} {
    flex-direction: column;
    width: 80%;
  }
`
export const TitleGreeting = styled.h1`
  @media ${({ theme }) => theme.device.laptopM} {
    font-size: 1.8rem;
  }
  @media ${({ theme }) => theme.device.laptopS} {
    text-align: center;
  }
  @media ${({ theme }) => theme.device.laptopS} {
    font-size: ${({ theme }) => theme.fontSize['2xl']};
  }
`
export const TextGretting = styled.p`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  margin-top: 10px;
  @media ${({ theme }) => theme.device.laptopM} {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
  @media ${({ theme }) => theme.device.laptopS} {
    font-size: ${({ theme }) => theme.fontSize.base};
  }
  @media ${({ theme }) => theme.device.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.sb};
  }
`
export const RowInfos = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  @media ${({ theme }) => theme.device.laptopS} {
    margin-block: 1rem;
  }
`
export const ColumnInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
  text-align: left;
  @media ${({ theme }) => theme.device.laptopM} {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.laptopS} {
    gap: 0.5rem;
    :nth-child(2) {
      font-size: 0.8rem;
      text-align: left;
    }
  }
  @media ${({ theme }) => theme.device.laptopS} {
    gap: 0.5rem 0rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    &:nth-child(2) {
      font-size: 0.8rem;
      text-align: center;
    }
  }
`
export const TitleInfo = styled.p``
