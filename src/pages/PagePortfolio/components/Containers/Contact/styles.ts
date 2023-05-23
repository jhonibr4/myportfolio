import styled from "styled-components";

export const ContentScreen = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme["purple-600"]};
`;

export const WrapperForm = styled.div`
  width: 40%;
  height: 80%;
`;
export const WrapperInputs = styled.div`
  gap: 0.8rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;
export const TitleForm = styled.h1`
  color: ${({ theme }) => theme["purple-200"]};
  font-size: 3rem;
`;
export const SubtitleForm = styled.p`
  margin-top: 1rem;
  width: 80%;
`;
export const LabelInput = styled.label`
  font-size: ${({ theme }) => theme.fontSize["2xl"]};
  color: ${({ theme }) => theme["purple-200"]};
`;
export const InputForm = styled.input`
  padding-inline: 0.5rem;
  height: 40px;
  width: 70%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme["purple-200"]};
`;
export const TextAreaForm = styled.textarea`
  padding: 0.5rem;
  width: 70%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme["purple-200"]};
  min-height: 8rem;
  max-height: 14rem;
  resize: vertical;
`;
export const ButtonSend = styled.button`
  margin-top: 0.3rem;
  width: 73%;
  height: 50px;
  border-radius: 15px;
  color: ${({ theme }) => theme["purple-600"]};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 500;
  background-color: ${({ theme }) => theme.white};
  cursor: pointer;
  transition: 0.5s;
  :hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme["purple-400"]};
  }
`;
