import styled from "styled-components";

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  width: 4rem;
  height: 100vh;
  background-color: ${({ theme }) => theme["purple-400"]};
`;
export const ImageLogo = styled.img`
  display: flex;
  align-self: center;
  top: 20px;
  position: absolute;
  width: 80%;
`;
export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 55%;
  width: 100%;
`;

export const ButtonMenu = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  border-radius: 50%;
  transition: 0.5s;

  cursor: pointer;

  svg {
    transition: 0.5s;
    border-radius: 50%;
    padding: 0.5rem;
    font-size: 2rem;
  }
`;
