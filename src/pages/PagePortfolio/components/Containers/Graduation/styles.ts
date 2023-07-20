import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ContentScreen = styled.section`
  overflow-x: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme['black-800']};
  padding-bottom: 4rem;
`
export const WrapperGraduation = styled(motion.div)`
  margin-top: 4rem;
  display: flex;
  gap: 10rem;
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
  margin-top: 1rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const WrapperCards = styled.div`
  display: flex;

  flex-direction: column;

  width: 60%;

  @media ${({ theme }) => theme.device.laptopS} {
    width: 90%;
  }
  @media ${({ theme }) => theme.device.tabletL} {
    gap: 1rem;
    width: 70%;
    flex-direction: row;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  @media ${({ theme }) => theme.device.tabletM} {
  }
  @media ${({ theme }) => theme.device.mobileL} {
    width: 100%;
    flex-direction: row;
    overflow-x: hidden;
  }
`
export const ButtonSelectCourse = styled.button`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme['purple-600']};
  svg {
    font-size: 1.5rem;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    width: 4rem;
    height: 4rem;
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
