import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const CardSchool = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  display: grid;
  border: 2px solid ${({ theme }) => theme['purple-600']};
  border-radius: 10px;
  align-items: center;
  grid-template-areas:
    'logo title title'
    'logo hours hours'
    'logo . button';
  grid-template-columns: 30% 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  width: 100%;
  height: 8.5rem;
  @media ${({ theme }) => theme.device.laptopL} {
    height: 9rem;
  }
  @media ${({ theme }) => theme.device.laptopM} {
    height: 7rem;
  }
  @media ${({ theme }) => theme.device.tabletL} {
    margin-bottom: 0rem;
    width: 92.5%;
    flex-shrink: 0;
  }
  @media ${({ theme }) => theme.device.tabletM} {
    width: 91.3%;
  }
  @media ${({ theme }) => theme.device.tabletS} {
    width: 90.4%;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    width: 95%;
    padding: 1rem 0.3rem;
    grid-template-areas:
      'title title title'
      'hours hours hours'
      '. . button';
  }
  @media ${({ theme }) => theme.device.mobileM} {
    width: 94%;
  }
  @media ${({ theme }) => theme.device.mobileS} {
    width: 92%;
    grid-template-areas:
      'title title title'
      'hours hours hours'
      '. . button';
  }
`
export const ImageSchoolCurse = styled.img`
  grid-area: logo;
  width: 100%;
`
export const TitleSchool = styled.h1`
  padding-left: 1rem;
  font-size: 1.2rem;
  grid-area: title;
  @media ${({ theme }) => theme.device.laptopM} {
    font-size: ${({ theme }) => theme.fontSize.sb};
  }
`
export const WrapperHours = styled.div`
  display: flex;
  padding-left: 1rem;
  font-size: ${({ theme }) => theme.fontSize.lg};
  grid-area: hours;
`
export const LabelHour = styled.label`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme['gray-500']};
  @media ${({ theme }) => theme.device.laptopM} {
    font-size: ${({ theme }) => theme.fontSize.sb};
  }
  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 0.8rem;
  }
`
export const TextHour = styled.span`
  margin-left: 0.2rem;
  color: ${({ theme }) => theme['gray-500']};
  @media ${({ theme }) => theme.device.laptopM} {
    font-size: ${({ theme }) => theme.fontSize.sb};
  }
  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 0.8rem;
  }
`

export const ButtonView = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 25px;
  width: 100%;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme['gray-500']};
  grid-area: button;
  margin-right: 0.5rem;
  cursor: pointer;
  padding-inline: 0.5rem;
  transition: 0.5s;
  :hover {
    color: ${({ theme }) => theme['purple-600']};
  }
  svg {
    margin-top: 0.2rem;
  }
  @media ${({ theme }) => theme.device.laptopM} {
    font-size: ${({ theme }) => theme.fontSize.sb};
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
  padding: 10px;
  display: flex;
  min-width: 45rem;
  height: 35rem;

  background-color: ${({ theme }) => theme['black-800']};

  @media ${({ theme }) => theme.device.laptopM} {
    width: 90%;
    height: 30rem;
  }
  @media ${({ theme }) => theme.device.laptopS} {
    min-width: 50rem;
    width: 90%;
  }
  @media ${({ theme }) => theme.device.tabletL} {
    padding: 0px 0.5rem;
    min-width: 30rem;

    position: relative;
    flex-direction: column;
    width: 30vw;
    height: 100%;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    align-items: center;
    padding: 0px 0.5rem;
    min-width: 100%;
    position: relative;
    flex-direction: column;
    width: 10rem;
    height: 100%;
  }
`

export const ImageCertificate = styled.img`
  @media ${({ theme }) => theme.device.laptopS} {
    width: 80%;
  }
  @media ${({ theme }) => theme.device.laptopM} {
    width: 60%;
  }
  @media ${({ theme }) => theme.device.tabletL} {
    width: 100%;
    margin-top: 0.5rem;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    width: 96%;
  }
`
export const DialogTitle = styled(Dialog.Title)`
  margin-block: 1rem;
  align-self: center;

  color: ${({ theme }) => theme['purple-400']};
  @media ${({ theme }) => theme.device.laptopM} {
    font-size: 1rem;
  }
  @media ${({ theme }) => theme.device.laptopM} {
    margin-block: 0.8rem;
  }
`
export const DialogClose = styled(Dialog.Close)`
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

  @media ${({ theme }) => theme.device.laptopM} {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    top: 0.5rem;
    right: 0;
    position: absolute;
    background-color: ${({ theme }) => theme['purple-600']};
  }
  @media ${({ theme }) => theme.device.tabletL} {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    top: 1rem;
    right: 1rem;
    position: absolute;
    background-color: ${({ theme }) => theme['purple-600']};
  }
`
export const WrapperInfoCertificate = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media ${({ theme }) => theme.device.laptopM} {
    width: 40%;
  }
  @media ${({ theme }) => theme.device.tabletL} {
    width: 100%;

    position: static;
    font-size: 0.8rem;
  }
`
export const LabelCode = styled.span`
  text-align: center;
  align-self: center;
  margin-block: 20px;
  display: flex;
  font-weight: 600;
  color: ${({ theme }) => theme['purple-400']};
  p {
    margin-left: 5px;
    color: ${({ theme }) => theme.white};
    font-weight: 400;
  }
  @media ${({ theme }) => theme.device.laptopM} {
    font-size: 0.8rem;
  }
  @media ${({ theme }) => theme.device.tabletL} {
    margin-block: 0.3rem;
  }
`
export const WrapperTechsCourses = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  align-items: center;
  width: 30rem;

  @media ${({ theme }) => theme.device.laptopM} {
    margin-left: 0.5rem;
    width: 100%;
  }
  @media ${({ theme }) => theme.device.tabletL} {
    align-self: center;
  }
  @media ${({ theme }) => theme.device.tabletL} {
    width: 100%;
  }
`
export const ButtonViewCertificate = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  align-self: flex-end;
  position: absolute;
  bottom: 30px;
  right: 10px;
  padding-inline: 10px;
  border-radius: 10px;
  background-color: transparent;
  color: ${({ theme }) => theme['purple-600']};
  cursor: pointer;
  svg {
    margin-left: 10px;
  }

  @media ${({ theme }) => theme.device.laptopM} {
    font-size: 1rem;
  }
  @media ${({ theme }) => theme.device.tabletL} {
    position: static;
    margin-block: 2rem;
    bottom: 2rem;
  }
`
