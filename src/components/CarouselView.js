import React, { useContext } from "react";
import { CocktailsContext } from "./useFetchCocktails";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselView = () => {
  const { cocktails } = useContext(CocktailsContext);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Slider {...settings}>
      {cocktails.map((cocktail) => (
        <>
          {" "}
          <img
            alt={cocktail.strDrink}
            src={cocktail.image}
            style={{ width: "100%", height: "auto", padding: "1rem" }}
          />
          <h3>{cocktail.name}</h3>
        </>
      ))}
    </Slider>
  );
};

export default CarouselView;
