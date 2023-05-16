import { useState, useEffect } from "react";
import { obterProdutosApi } from "../../Api/conexao";
import Banner from "../Banner";
import Cards from "../Cards";
import "./galeria.css";

export default function Galeria() {
  const [camisas, setCamisas] = useState([]);
  useEffect(() => atualizaCamisas());
  function atualizaCamisas() {
    obterProdutosApi()
      .then((resposta) => {
        setCamisas(resposta.data);
      })
      .catch((erro) => console.log(erro));
  }
  return (
    <section>
      <Banner />
      <div className="galeria">
        <h2>Navegue pela galeria</h2>
        <Cards itens={camisas} />
      </div>
    </section>
  );
}
