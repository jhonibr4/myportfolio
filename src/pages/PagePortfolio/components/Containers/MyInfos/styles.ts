import styled from "styled-components";

import LogoBackground from "../../../../../assets/logo.svg";

export const ContentScreen = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme["purple-600"]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url(${LogoBackground});
`;
export const WrapperInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 45%;
  text-align: justify;
`;
export const TitleGreeting = styled.h1``;
export const TextGretting = styled.p`
  text-align: left;
  font-size: ${({ theme }) => theme.fontSize["2xl"]};
  margin-top: 10px;
`;
export const RowInfos = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
`;
export const ColumnInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
`;
export const TitleInfo = styled.p``;
