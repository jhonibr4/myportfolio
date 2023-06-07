import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  width: 30%;
  height: 30rem;
  border: 2px solid ${({ theme }) => theme['purple-600']};
  @media ${({ theme }) => theme.device.laptopS} {
    width: 47%;
  }
  @media ${({ theme }) => theme.device.tabletL} {
    width: 46.9%;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    flex-shrink: 0;
    width: 98%;
  }
`
export const WrapperImage = styled.div`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: ${({ theme }) => theme['purple-600']};
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const ImageLogoProject = styled.img`
  width: 80%;
`
export const WrapperInfoProject = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 90%;
  height: 60%;
`
export const NameProject = styled.h1``
export const DescriptionProject = styled.p`
  margin-top: 0.5rem;
  @media ${({ theme }) => theme.device.laptopM} {
    text-align: justify;
  }
`
export const ButtonViewProject = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 600;
  width: 50%;
  height: 40px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme['purple-400']};
  align-self: flex-end;
  margin-top: auto;
  margin-bottom: 2rem;
  justify-self: flex-end;
  cursor: pointer;
  transition: 0.9s;
  :hover {
    background-color: ${({ theme }) => theme['purple-600']};
  }
  @media ${({ theme }) => theme.device.laptopM} {
    width: 60%;
  }
`

export const WrapperChangeProject = styled.div`
  margin-top: 1rem;
  gap: 2rem;
  display: flex;
  justify-content: center;
  width: 50%;
`
export const ButtonChangeProject = styled.button`
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
  background-color: ${({ theme }) => theme['purple-600']};
  svg {
    font-size: 1.8rem;
  }
`
export const DialogRoot = styled(Dialog.Root)``
export const DialogTrigger = styled(Dialog.Trigger)``
export const DialogPortal = styled(Dialog.Portal)``
export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`
export const DialogContent = styled(Dialog.Content)`
  position: relative;
  border-radius: 15px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  min-width: 45rem;
  height: 45rem;

  background-color: ${({ theme }) => theme['black-800']};
  img {
    width: 45rem;
    @media ${({ theme }) => theme.device.laptopL} {
      width: 45rem;
    }
    @media ${({ theme }) => theme.device.mobileL} {
      align-items: center;
      width: 100%;
    }
  }
  @media ${({ theme }) => theme.device.laptopL} {
    min-width: 45rem;
    height: 45rem;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    min-width: 95%;
    height: 82%;
  }
`
export const DialogTitle = styled(Dialog.Title)`
  margin-block: 0rem;
  align-self: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme['purple-600']};

  @media ${({ theme }) => theme.device.mobileL} {
    margin-block: 1rem;
  }
`
export const SecondTitle = styled(DialogTitle)`
  margin-block: 0rem 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme['purple-600']};
`

export const DialogClose = styled(Dialog.Close)`
  position: absolute;
  top: 10px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  width: 2rem;
  height: 2rem;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  transition: 0.5s;
  svg {
    font-size: 1.5rem;
  }
  :hover {
    background-color: ${({ theme }) => theme['purple-600']};
  }
`
export const WrapperImageProject = styled.div`
  display: flex;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  width: 100%;
  height: 60%;

  align-items: center;
  @media ${({ theme }) => theme.device.laptopL} {
    width: 100%;
    height: 60%;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    width: 100%;
    height: 40%;
  }
`
export const ImageProject = styled.img`
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  width: 100%;
  height: 100%;
`
export const ButtonPrev = styled.button`
  position: absolute;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 25px;
  background-color: #0005;
  cursor: pointer;
  transition: 0.5s;
  svg {
    font-size: 1.5rem;
  }
  :hover {
    background-color: #0008;
  }
`
export const ButtonNext = styled.button`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 25px;
  background-color: #0005;
  cursor: pointer;

  transition: 0.5s;
  svg {
    font-size: 1.5rem;
  }
  :hover {
    background-color: #0008;
  }
`
export const WrapperAllInfos = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const WrapperTechsProject = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
`
export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
`
export const ButtonViewProjectGithub = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: bold;
  width: 40%;
  height: 40px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme['purple-600']};
  align-self: center;
  margin-top: auto;
  margin-bottom: 2rem;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme['purple-600']};
  }
  svg {
    margin-left: 10px;
    font-size: 1.5rem;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    margin-top: 1rem;
    width: 85%;
  }
`
