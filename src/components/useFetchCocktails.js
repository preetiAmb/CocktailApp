import { useState, useEffect, createContext } from "react";

export const CocktailsContext = createContext([]);

const useFetchCocktails = () => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCocktails = async () => {
    setLoading(true);
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

    try {
      const response = await fetch(url);
      const result = await response.json();

      const { drinks } = result;
      if (!drinks) {
        setCocktails([]);
      } else {
        const newCocktails = drinks.map((drink) => {
          const { idDrink, strDrink, strDrinkThumb, strInstructions, strCategory, strAlcoholic, strGlass } =
            drink;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            instructions: strInstructions,
            category: strCategory,
            info: strAlcoholic,
            glass: strGlass,
          };
        });

        setCocktails(newCocktails);
      }

      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  return { cocktails, loading, error, fetchCocktails };
};

export const CocktailProvider = ({ children }) => {
  const cocktailsContextValue = useFetchCocktails();

  return (
    <CocktailsContext.Provider value={cocktailsContextValue}>
      {children}
    </CocktailsContext.Provider>
  )
}
