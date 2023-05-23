import styled from "styled-components";

export const ContentScreen = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme["purple-600"]};
`;

export const ContentHardSkills = styled.div`
  display: flex;

  flex-wrap: wrap;
  gap: 2rem 4.6rem;
`;
export const WrapperHardSkills = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const TitleHardSkills = styled.h1`
  margin-bottom: 3rem;
  align-self: center;
  span {
    color: ${({ theme }) => theme["black-800"]};
  }
`;
