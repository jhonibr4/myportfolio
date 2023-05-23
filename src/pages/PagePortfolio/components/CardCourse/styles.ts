import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const CardSchool = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  display: grid;
  border: 2px solid ${({ theme }) => theme["purple-600"]};
  border-radius: 10px;
  align-items: center;
  grid-template-areas:
    "logo title title"
    "logo hours ."
    "logo . button";
  grid-template-columns: 30% 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  width: 80%;
  height: 8rem;
`;
export const ImageSchoolCurse = styled.img`
  grid-area: logo;
  width: 100%;
`;
export const TitleSchool = styled.h1`
  padding-left: 1rem;
  font-size: 0.9rem;
  grid-area: title;
`;
export const WrapperHours = styled.div`
  display: flex;
  padding-left: 1rem;
  grid-area: hours;
`;
export const LabelHour = styled.label`
  font-weight: bold;
  color: ${({ theme }) => theme["gray-500"]};
`;
export const TextHour = styled.span`
  margin-left: 0.2rem;
  color: ${({ theme }) => theme["gray-500"]};
`;

export const ButtonView = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 25px;
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme["gray-500"]};
  grid-area: button;
  margin-right: 0.5rem;
  cursor: pointer;
  padding-inline: 0.5rem;
  transition: 0.5s;
  :hover {
    color: ${({ theme }) => theme["purple-600"]};
  }
  svg {
    margin-top: 0.2rem;
  }
`;

export const DialogRoot = styled(Dialog.Root)``;
export const DialogTrigger = styled(Dialog.Trigger)``;
export const DialogPortal = styled(Dialog.Portal)``;
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
`;
export const DialogContent = styled(Dialog.Content)`
  padding: 10px;
  display: flex;
  min-width: 45rem;
  height: 35rem;

  background-color: ${({ theme }) => theme["black-800"]};
  img {
    width: 45rem;
    margin-right: 10px;
  }
`;
export const DialogTitle = styled(Dialog.Title)`
  margin-block: 1rem;
  align-self: center;

  color: ${({ theme }) => theme["purple-400"]};
`;
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
    background-color: ${({ theme }) => theme["purple-600"]};
  }
`;
export const WrapperInfoCertificate = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const LabelCode = styled.span`
  align-self: center;
  margin-block: 20px;
  display: flex;
  font-weight: 600;
  color: ${({ theme }) => theme["purple-400"]};
  p {
    margin-left: 5px;
    color: ${({ theme }) => theme.white};
    font-weight: 400;
  }
`;
export const WrapperTechsCourses = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  align-items: center;
  width: 30rem;
`;
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
  color: ${({ theme }) => theme["purple-600"]};
  cursor: pointer;
  svg {
    margin-left: 10px;
  }
`;
