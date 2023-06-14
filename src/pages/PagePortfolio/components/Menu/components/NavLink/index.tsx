import { ReactElement, useContext } from 'react'
import { AnchorLinkButton, ButtonMenu, TextButton } from './styles'
import { useTheme } from 'styled-components'
import { useMediaQuery } from '../../../../../../hooks/useQueryMedia'
import { ScrollContext } from '../../../../../../context/ScrollContext'
import { SelectedPage } from '../../../../../../shared/types'

interface INamePage {
  textButton: string
  name: SelectedPage
  icon: ReactElement
}

export function NavLink({ textButton, name, icon }: INamePage) {
  const { selectedPage, changeSelectedPage } = useContext(ScrollContext)

  const theme = useTheme()
  const isDeviceLaptopSmall = useMediaQuery(theme.device.laptopS)

  const lowerCasePage = name.toLowerCase().replace(/ /g, '') as SelectedPage

  return (
    <AnchorLinkButton
      selected={lowerCasePage === selectedPage}
      href={`#${lowerCasePage}`}
    >
      <ButtonMenu
        selected={lowerCasePage === selectedPage}
        onClick={() => changeSelectedPage(name)}
      >
        {icon}
        {isDeviceLaptopSmall && (
          <TextButton selected={lowerCasePage === selectedPage}>
            {textButton}
          </TextButton>
        )}
      </ButtonMenu>
    </AnchorLinkButton>
  )
}
