import { ReactNode, createContext, useState } from 'react'
import { SelectedPage } from '../shared/types'

interface IScrollContext {
  selectedPage: SelectedPage
  changeSelectedPage: (page: SelectedPage) => void
}

interface IScrollProvider {
  children: ReactNode
}
export const ScrollContext = createContext({} as IScrollContext)

export function ScrollProvider({ children }: IScrollProvider) {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home)

  function changeSelectedPage(page: SelectedPage) {
    setSelectedPage(page)
  }

  return (
    <ScrollContext.Provider value={{ selectedPage, changeSelectedPage }}>
      {children}
    </ScrollContext.Provider>
  )
}
