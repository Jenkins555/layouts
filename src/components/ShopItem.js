import React from "react";
import "./css/list.css"

function ShopItem(props) {
  const { product } = props;
  return (
    <div className="item">
      <img src={product.img} alt={product.name} />      
        <h4>{product.name}</h4>
        <p>{product.color}</p>
        <p>{product.price}</p>
        <button>Купить</button>      
    </div>
  );
}

export default ShopItem;
