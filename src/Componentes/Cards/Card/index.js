import React from "react";
import "./card.css";
import { FaCartPlus } from "react-icons/fa";
import { useAutCtx } from "../../AutCtx";

export default function Card({ item }) {
  const autCtx = useAutCtx();
  const usuarioCliente = autCtx.isCliente;

  function favoritar() {
    console.log("fazendo um teste de carrinho");
  }

  return (
    <li className="style-card">
      <img className="style-imagem" src={item.imagem} alt={item.descricao} />
      <p className="style-descricao">
        {item.descricao + " - Tam " + item.tamanho + " R$ " + item.valor}
      </p>
      <p className="favoritar">
        {usuarioCliente && <FaCartPlus onClick={favoritar} color="yellow" />}
      </p>
    </li>
  );
}
