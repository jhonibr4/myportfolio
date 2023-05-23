import styled from "styled-components";

export const ContentScreen = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme["black-800"]};
`;
export const WrapperGraduation = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 4rem;
`;
export const WrapperCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
