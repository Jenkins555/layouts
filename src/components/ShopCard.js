import React from "react";


function ShopCard( props ) {
  const { product } = props;
  return (
    <div className="card">
      <img src={product.img} alt={product.name} />
      <div className="card-text">
        <h2>{product.name}</h2>
        <p>{product.color}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
}

export default ShopCard;