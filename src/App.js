import { ThemeProvider } from "theme/ThemeProvider";
import { LandingPage } from "pages";
import { Header } from "components";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
