import React from "react";

function ShopItem( props ) {
  const { product } = props;
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