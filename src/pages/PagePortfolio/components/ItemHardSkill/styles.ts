import styled from "styled-components";

export const ContainerItemHardSkill = styled.div`
  padding-block: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.white};
  border-radius: 15px;
  width: 25%;
  svg {
    color: ${({ theme }) => theme.white};
    font-size: 4rem;
    margin-bottom: 0.5rem;
  }
`;
export const ImageHardSkill = styled.img`
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

interface IIconLevel {
  value: boolean;
}
export const RowIconLevel = styled.div`
  display: flex;
  gap: 0rem 0.1rem;
  .iconLevel {
    color: ${({ theme }) => theme.white};
    font-size: 1rem;
  }
`;
export const WrapperIcon = styled.div<IIconLevel>`
  display: flex;
`;
export const TitleTechs = styled.h1`
  margin-top: 3rem;
  text-align: center;
  p {
    margin-bottom: 0.5rem;
    font-size: ${({ theme }) => theme.fontSize.base};
  }
  span {
    color: ${({ theme }) => theme["black-800"]};
  }
`;
export const RowTechs = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  margin-top: 1rem;

  width: 70%;

  svg {
    color: ${({ theme }) => theme.white};
    font-size: 9rem;
  }
`;
