import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./style/defaultTheme";
import { GlobalStyle } from "./style/GlobalStyle";
import { PagePortfolio } from "./pages/PagePortfolio";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <PagePortfolio />
    </ThemeProvider>
  );
}

export default App;
