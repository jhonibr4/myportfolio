import styled from 'styled-components'

export const ContentScreen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme['black-800']};
`
export const WrapperGraduation = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 5rem;
  align-items: center;

  width: 80%;

  @media ${({ theme }) => theme.device.laptopM} {
    margin-top: 1rem;
    gap: 5rem;
    width: 90%;
  }
  @media ${({ theme }) => theme.device.laptopS} {
    margin-top: 3rem;
    gap: 5rem;
  }
  @media ${({ theme }) => theme.device.tabletL} {
    gap: 0rem;
    display: flex;
    flex-direction: column-reverse;
  }
`
export const WrapperButtonsCard = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  :nth-child(3) {
    margin-top: 20rem;
    background-color: #e02;
  }
  @media ${({ theme }) => theme.device.tabletL} {
  }
`
export const WrapperCards = styled.div`
  display: flex;

  flex-direction: column;

  width: 80%;

  @media ${({ theme }) => theme.device.laptopS} {
    width: 90%;
  }
  @media ${({ theme }) => theme.device.tabletL} {
    width: 70%;
    flex-direction: row;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  @media ${({ theme }) => theme.device.tabletM} {
  }
  @media ${({ theme }) => theme.device.mobileL} {
    width: 70%;
    flex-direction: row;
    overflow-x: hidden;
  }
`
export const ButtonSelectCourse = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 3.5rem;
  height: 3.5rem;
  background-color: ${({ theme }) => theme['purple-600']};
  svg {
    font-size: 1.5rem;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    width: 3rem;
    height: 3rem;
  }
  @media ${({ theme }) => theme.device.mobileM} {
    width: 3rem;
    height: 2.8rem;
  }
  @media ${({ theme }) => theme.device.mobileS} {
    width: 3rem;
    height: 2.5rem;
  }
`
export const ButtonPrev = styled(ButtonSelectCourse)`
  margin-right: 0.5rem;
  @media ${({ theme }) => theme.device.tabletL} {
    margin-right: 1rem;
  }
`
export const ButtonNext = styled(ButtonSelectCourse)`
  margin-left: 0.5rem;
  @media ${({ theme }) => theme.device.tabletL} {
    margin-left: 1rem;
  }
`
