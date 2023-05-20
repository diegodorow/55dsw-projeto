import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { obterProdutosApi } from "../../Api/conexao";
import { FaPlus } from "react-icons/fa";
import MenuAdmin from "../MenuAdmin";
import "./produtos.css";

const ListaProdutos = () => {
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
    <div id="container-center-produtos">
      <MenuAdmin />
      <div id="formatar-produtos">
        <h1>Produtos</h1>
        <Link to="/cadastrarproduto">
          <button className="btn btn-success mb-3">
            <FaPlus />
          </button>
        </Link>
        <table className="table">
          <thead>
            <tr>
              <td>Código</td>
              <td>Descrição do Produto</td>
              <td>Valor</td>
              <td>Tamanho</td>
              <td>Cor</td>
              <td>Quantidade</td>
            </tr>
          </thead>
          <tbody>
            {camisas.map((camisa) => (
              <tr key={camisa.id}>
                <td>{camisa.id}</td>
                <td>{camisa.descricao}</td>
                <td>{camisa.valor}</td>
                <td>{camisa.tamanho}</td>
                <td>{camisa.cor}</td>
                <td>{camisa.quantidade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaProdutos;
