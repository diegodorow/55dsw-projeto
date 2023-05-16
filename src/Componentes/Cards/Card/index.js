import React from "react";
import "./card.css";

export default function Card({ item }) {
  return (
    <li className="style-card">
      <img className="style-imagem" src={item.imagem} alt={item.descricao} />
      <p className="style-descricao">{item.descricao + " - Tam " + item.tamanho}</p>
    </li>
  );
}
