import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { obterProdutosApi, excluirCamisaApi } from "../../Api/conexao";
import {
  FaTrashAlt,
  FaPlus,
} from "react-icons/fa";

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

  function excluirCamisa(id) {
    excluirCamisaApi(id)
      .then((resposta) => {
        console.log(resposta);
        atualizaCamisas();
      })
      .catch((erro) => console.log(erro));
  }

  function adicionarQuantidade(id) {
    console.log("visualizar tarefa " + id);
  }

  return (
    <div className="container">
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
            <td>Tamanho</td>
            <td>Cor</td>
            <td>Quantidade</td>
            <td>Add Qtd</td>
            <td>Remover</td>
          </tr>
        </thead>
        <tbody>
          {camisas.map((camisa) => (
            <tr key={camisa.id}>
              <td>{camisa.id}</td>
              <td>{camisa.descricao}</td>
              <td>{camisa.tamanho}</td>
              <td>{camisa.cor}</td>
              <td></td>
              <td>
                <button
                  className="btn btn-success mb-3"
                  onClick={() => adicionarQuantidade(camisa.id)}
                >
                  <FaPlus />
                </button>
              </td>
              <td>
                <button
                  className="btn btn-success mb-3"
                  onClick={() => excluirCamisa(camisa.id)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaProdutos;
