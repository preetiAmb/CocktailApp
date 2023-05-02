import { CocktailProvider } from "./components/useFetchCocktails";
import CocktailList from "./components/CocktailList";

function App() {
  return (
    <>
      <CocktailProvider>
        <CocktailList />
      </CocktailProvider>
    </>
  );
}

export default App;
