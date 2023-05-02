import { createContext } from "react";
import { useFetchCocktails } from "./useFetchCocktails";

export const CocktailsContext = createContext([]);

export const CocktailsProvider = ({ children }) => {
  const cocktailsContextValue = useFetchCocktails();

  return (
    <CocktailsContext.Provider value={cocktailsContextValue}>
      {children}
    </CocktailsContext.Provider>
  )
};
