import { CocktailsProvider } from "./components/CocktailsContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <CocktailsProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Container>
            <Box>
              <Home />
            </Box>
          </Container>
        </ThemeProvider>
      </CocktailsProvider>
    </>
  );
}

export default App;
