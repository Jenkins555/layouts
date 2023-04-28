import React from "react";
import ShopItem from "./ShopItem";

 function ListView( props ) {
  const { items } = props;
  return (
    <div className="list-view">
      {items.map((item,index) => (
        <ShopItem
          key={index}
          name={item.name}
          price={item.price}
          color={item.color}
          img={item.img}
        />
      ))}
    </div>
  );
}
export default ListView;