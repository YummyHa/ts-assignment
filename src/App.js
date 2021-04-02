import { ThemeProvider } from "theme/ThemeProvider";
import { LandingPage } from "./pages";
import { Header } from "./components";
import GlobalStyles from "./globalStyles";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Header />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
