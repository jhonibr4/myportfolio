import styled from 'styled-components'

export const ContentScreen = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme['purple-600']};
  padding-bottom: 2rem;
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

export const WrapperForm = styled.div`
  width: 40%;
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
  width: 90%;

  color: ${({ theme }) => theme['purple-200']};
  font-size: 3rem;

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
  width: 80%;
  @media ${({ theme }) => theme.device.tabletL} {
    width: 100%;
    text-align: center;
  }
`
export const LabelInput = styled.label`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  color: ${({ theme }) => theme['purple-200']};
  @media ${({ theme }) => theme.device.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`
export const InputForm = styled.input`
  padding-inline: 0.5rem;
  height: 40px;
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
  min-height: 8rem;
  max-height: 14rem;
  resize: vertical;
  @media ${({ theme }) => theme.device.laptopM} {
    width: 97%;
  }
  @media ${({ theme }) => theme.device.tabletL} {
    resize: none;
  }
`
export const ButtonSend = styled.button`
  align-self: center;
  margin-top: 0.3rem;
  width: 100%;
  height: 50px;
  border-radius: 15px;
  color: ${({ theme }) => theme['purple-600']};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 500;
  background-color: ${({ theme }) => theme.white};
  cursor: pointer;
  transition: 0.5s;
  :hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme['purple-400']};
  }
`
