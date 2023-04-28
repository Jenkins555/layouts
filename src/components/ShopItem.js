import React from "react";

function ShopItem({ product }) {
  return (
    <div className="item">
      <img src={product.img} alt={product.name} />
      <div className="item-text">
        <h2>{product.name}</h2>
        <p>{product.color}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
}

export default ShopItem;