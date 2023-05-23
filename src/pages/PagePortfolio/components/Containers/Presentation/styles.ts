import styled from "styled-components";

export const ContentScreen = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme["black-800"]};
`;

export const TitleContent = styled.h1`
  align-self: center;
  justify-self: flex-start;
  margin-top: 3rem;
`;
export const WrapperTitle = styled.div`
  width: 50%;
`;
export const TitlePresentation = styled.h1`
  font-size: 3.5rem;
  span {
    font-size: 2rem;
    font-weight: 500;
  }
  .text-purple {
    font-size: 3.5rem;
    color: ${({ theme }) => theme["purple-600"]};
  }
`;
export const SubtitlePresentation = styled.p`
  margin-top: 1.5rem;
  font-size: 1.5rem;
  span {
    font-weight: bold;
    color: ${({ theme }) => theme["purple-600"]};
  }
`;
export const ContentImage = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
`;
export const WrapperButtonsPresentation = styled.div`
  display: flex;
  gap: 1rem;
`;
export const ButtonWhatsApp = styled.button`
  padding-inline: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  width: 12rem;
  height: 50px;
  background-color: ${({ theme }) => theme["purple-600"]};
  transition: 0.5s;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme["purple-400"]};
  }
  svg {
    font-size: ${({ theme }) => theme.fontSize["2xl"]};
  }
`;
export const ButtonGithub = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSize.lg};
  width: 50px;
  height: 50px;
  border: 2px solid ${({ theme }) => theme["purple-600"]};
  background: transparent;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    border: 2px solid ${({ theme }) => theme["purple-400"]};
    background-color: ${({ theme }) => theme["purple-400"]};
  }
  svg {
    color: ${({ theme }) => theme.white};
    font-size: 1.5rem;
  }
`;
