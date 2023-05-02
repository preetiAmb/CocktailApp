import { render, screen } from "@testing-library/react";
import { CocktailsContext } from "../CocktailsContext";

import CardView from "./CardView";

describe("CardView component", () => {
  test("renders a card for each cocktail in the context", () => {
    const cocktails = [
      {
        id: 1,
        name: "Margarita",
        glass: "Cocktail glass",
        info: "A classic cocktail that's easy to make",
        instructions: "1. Combine tequila, lime juice, and simple syrup. 2. Shake with ice. 3. Strain into a glass over ice. 4. Garnish with a lime wedge.",
        image: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
      },
      {
        id: 2,
        name: "Old Fashioned",
        glass: "Old-fashioned glass",
        info: "A simple and classic cocktail",
        instructions: "1. Add sugar, bitters, and water to a glass. 2. Stir until sugar is dissolved. 3. Add ice and whiskey. 4. Garnish with an orange peel and cherry.",
        image: "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
      },
    ];

    render(
      <CocktailsContext.Provider value={{ cocktails }}>
        <CardView />
      </CocktailsContext.Provider>
    );

    expect(screen.getByAltText("Margarita")).toBeInTheDocument();
    expect(screen.getByAltText("Old Fashioned")).toBeInTheDocument();
    expect(screen.getByText("Margarita")).toBeInTheDocument();
    expect(screen.getByText("Old Fashioned")).toBeInTheDocument();
    expect(screen.getByText("Cocktail glass")).toBeInTheDocument();
    expect(screen.getByText("Old-fashioned glass")).toBeInTheDocument();
  });
});
