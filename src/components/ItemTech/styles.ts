import styled from 'styled-components'

export const Tech = styled.span`
  margin-right: 0.5rem;

  border-radius: 5px;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme['purple-600']};
  @media ${({ theme }) => theme.device.laptopM} {
    font-size: 0.8rem;
  }
`
