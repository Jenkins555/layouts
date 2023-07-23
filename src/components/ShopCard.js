import React from "react";
import "./css/card.css"

function ShopCard( props ) {
  const { product } = props;
  return (
    <div className="card">
      <img src={product.img} alt={product.name} />
      <div className="card-text">
        <h2>{product.name}</h2>
        <p>{product.color}</p>
        <p>{product.price}</p>
        <button>Купить</button> 
      </div>
    </div>
  );
}

export default ShopCard;