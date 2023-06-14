import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './style/defaultTheme'
import { GlobalStyle } from './style/GlobalStyle'
import { PagePortfolio } from './pages/PagePortfolio'
import { ScrollProvider } from './context/ScrollContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ScrollProvider>
        <PagePortfolio />
      </ScrollProvider>
    </ThemeProvider>
  )
}

export default App
