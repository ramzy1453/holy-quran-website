import AppbarLayout from "./components/AppbarLayout/";
import Footer from "./components/AppbarLayout/Footer";
import Router from "./routes";
import Intl18Provider from "./translations";
import ThemeProvider from "./components/ThemeProvider";

function App() {
  return (
    <Intl18Provider>
      <ThemeProvider>
        <AppbarLayout />
        <Router />
        <Footer />
      </ThemeProvider>
    </Intl18Provider>
  );
}

export default App;
