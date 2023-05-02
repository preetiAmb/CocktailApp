import { render, screen } from "@testing-library/react";
import GridView from "./GridView";
import { CocktailsContext } from "../CocktailsContext";
import { mockCocktails } from '../../mockContext'

describe("GridView", () => {
  it("renders images and names of cocktails", () => {
    render(<GridView />, {
      wrapper: ({ children }) => (
        <CocktailsContext.Provider value={{ cocktails: mockCocktails }}>
          {children}
        </CocktailsContext.Provider>
      ),
    });

    mockCocktails.map((cocktail) => {
      const imgElement = screen.getByAltText(cocktail.name);
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute("src", cocktail.image);

      const nameElement = screen.getByText(cocktail.name);
      expect(nameElement).toBeInTheDocument();
    });
  });
});
