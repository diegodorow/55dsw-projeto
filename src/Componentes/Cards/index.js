import React from "react";
import Card from "./Card";
import "./cards.css";

export default function Cards({ itens }) {
  return (
    <ul className="style-cards">
      {itens.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </ul>
  );
}
