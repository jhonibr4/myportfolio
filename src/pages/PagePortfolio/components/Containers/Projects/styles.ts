import styled from "styled-components";

export const ContentScreen = styled.div`
  height: 160vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme["black-800"]};
`;

export const WrapperCardsProject = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 85%;
  height: 100%;
  margin-top: 4rem;
`;
