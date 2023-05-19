import { FaCartPlus } from "react-icons/fa";
import { useAutCtx } from "../../AutCtx";
import { React } from "react";
import "./card.css";

export default function Card({ item }) {
  const autCtx = useAutCtx();
  const usuarioCliente = autCtx.isCliente;

  async function addCarrinho() {
    const camisa = {
      id: item.id,
      descricao: item.descricao,
      valor: item.valor,
      tamanho: item.tamanho,
      cor: item.cor,
    };
    autCtx.adicionarAoCarrinho(camisa);
  }

  return (
    <li className="style-card">
      <img className="style-imagem" src={item.imagem} alt={item.descricao} />
      <p className="style-descricao">
        {item.descricao + " - Tam " + item.tamanho + " R$ " + item.valor}
      </p>
      <p id="favoritar" align="center">
        {usuarioCliente && (
          <FaCartPlus size={30} onClick={addCarrinho} color="white" />
        )}
      </p>
    </li>
  );
}
