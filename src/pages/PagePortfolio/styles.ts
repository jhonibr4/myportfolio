import styled from 'styled-components'

export const ContainerMain = styled.div`
  position: absolute;
  right: 0;
  width: 96vw;
  @media ${({ theme }) => theme.device.laptopS} {
    width: 100%;
  }
`
