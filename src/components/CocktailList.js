import { useContext } from "react";
import { CocktailsContext } from "./useFetchCocktails";

const CocktailList = () => {
    const { cocktails, loading, error } = useContext(CocktailsContext);


  console.log(cocktails);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  return (
    <div>
      <h2>Popular Cocktails</h2>

      <ul>
        {cocktails.map((cocktail) => (
          <li key={cocktail.idDrink}>
            <image alt={cocktail} src={cocktail.image} />
            <h3>{cocktail.Category}</h3>
            <p>{cocktail.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CocktailList;
