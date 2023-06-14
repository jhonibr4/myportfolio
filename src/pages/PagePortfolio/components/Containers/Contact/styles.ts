import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ContentScreen = styled.section`
  overflow-x: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme['purple-600']};
  padding-bottom: 2rem;
  @media ${({ theme }) => theme.device.laptopM} {
    padding-block: 2rem;
    height: 100%;
  }
  @media ${({ theme }) => theme.device.laptopS} {
    padding-block: 2rem;
    height: 100%;
  }
  @media ${({ theme }) => theme.device.tabletL} {
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`

export const WrapperForm = styled(motion.div)`
  display: flex;
  flex-direction: column;

  justify-content: center;
  width: 45%;
  height: 80%;

  @media ${({ theme }) => theme.device.laptopM} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    width: 80%;
  }
`
export const WrapperInputs = styled.div`
  gap: 0.8rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  width: 80%;

  @media ${({ theme }) => theme.device.tabletL} {
    width: 100%;
  }
`
export const TitleForm = styled.h1`
  width: 100%;

  color: ${({ theme }) => theme['purple-200']};
  font-size: 3rem;

  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 3rem;
  }
  @media ${({ theme }) => theme.device.laptopM} {
    width: 81%;
  }
  @media ${({ theme }) => theme.device.tabletL} {
    width: 100%;
    text-align: center;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 2rem;
  }
  @media ${({ theme }) => theme.device.mobileM} {
    font-size: 1.8rem;
  }
  @media ${({ theme }) => theme.device.mobileM} {
    font-size: 1.6rem;
  }
`
export const SubtitleForm = styled.p`
  margin-top: 1rem;
  width: 85%;
  font-size: 1.2rem;
  @media ${({ theme }) => theme.device.tabletL} {
    width: 100%;
    text-align: center;
  }
`
export const LabelInput = styled.label`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme['purple-200']};
  @media ${({ theme }) => theme.device.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`
export const InputForm = styled.input`
  padding-inline: 0.5rem;
  height: 3rem;
  width: 96.5%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme['purple-200']};
  @media ${({ theme }) => theme.device.laptopM} {
    width: 97%;
  }
`
export const TextAreaForm = styled.textarea`
  padding: 0.5rem;
  width: 96.5%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme['purple-200']};
  min-height: 10rem;
  max-height: 15rem;
  resize: vertical;
  @media ${({ theme }) => theme.device.laptopM} {
    width: 97%;

    min-height: 15rem;
    resize: none;
  }
`
export const ButtonSend = styled.button`
  align-self: center;
  margin-top: 0.3rem;
  width: 99.5%;
  margin-right: 0.7rem;
  height: 4rem;
  border-radius: 15px;
  color: ${({ theme }) => theme['purple-600']};
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-weight: 500;
  background-color: ${({ theme }) => theme.white};
  cursor: pointer;
  transition: 0.5s;
  :hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme['purple-400']};
  }
  @media ${({ theme }) => theme.device.laptopM} {
    width: 100%;
    margin-right: 0rem;
  }
`
