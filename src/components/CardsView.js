// CardsView.js
import React from "react";

function CardsView(props) {
  const { cards } = props;
  return (
    <div className="cards-view">
      {cards}
    </div>
  );
}

export default CardsView;
