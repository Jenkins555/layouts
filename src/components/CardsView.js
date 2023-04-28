import React from "react";
import ShopCard from "./ShopCard";


function CardsView({ cards }) {
  return (
    <div className="cards-view">
      {cards.map((card,index) => (
        <ShopCard
          key={index}
          name={card.name}
          price={card.price}
          color={card.color}
          img={card.img}
        />
      ))}
    </div>
  );
}
export default CardsView;