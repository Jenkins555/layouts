import React, { useState } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";
import ShopCard from "./ShopCard";
import ShopItem from "./ShopItem";

const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 3",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 4",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 5",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 6",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

function Store() {
  const [view, setView] = useState("view_module");

  function handleSwitch() {
    setView(view === "view_module" ? "view_list" : "view_module");
  }

  const shopCards = products.map((product) => (
    <ShopCard product={product} key={product.name} />
  ));

  const shopItems = products.map((product) => (
    <ShopItem product={product} key={product.name} />
  ));

  return (
    <div>
      <IconSwitch icon={view} onSwitch={handleSwitch} />
      {view === "view_module" ? (
        <CardsView cards={shopCards} />
      ) : (
        <ListView items={shopItems} />
      )}
    </div>
  );
}

export default Store;