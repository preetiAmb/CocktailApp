import { CocktailProvider } from "./components/useFetchCocktails";
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
      <CocktailProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Container>
            <Box>
              <Home />
            </Box>
          </Container>
        </ThemeProvider>
      </CocktailProvider>
    </>
  );
}

export default App;
