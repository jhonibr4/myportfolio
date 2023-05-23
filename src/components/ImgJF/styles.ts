import styled from "styled-components";

interface ISizeImg {
  size: number;
}

export const ImgFigure = styled.img<ISizeImg>`
  width: ${({ width }) => `${width}rem`};
`;
