import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

interface INavSelected {
  selected: boolean
}
export const AnchorLinkButton = styled(AnchorLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  text-decoration: none;
`
export const ButtonMenu = styled.button<INavSelected>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: ${({ selected, theme }) =>
    selected ? theme.white : 'transparent'};
  border-radius: 50px;
  transition: 0.5s;

  cursor: pointer;

  svg {
    transition: 0.1s;
    border-radius: 50%;
    padding: 0.5rem;
    font-size: 2rem;
    color: ${({ selected, theme }) =>
      selected ? theme['purple-600'] : theme.white};
  }
  @media ${({ theme }) => theme.device.laptopS} {
    padding-right: 0.5rem;
    width: 90%;
  }
`
export const TextButton = styled.label<INavSelected>`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ selected, theme }) =>
    selected ? theme['purple-600'] : theme.white};
  background-color: transparent;
  transition: 0.5s;
`
