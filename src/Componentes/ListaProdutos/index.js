import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  obterProdutosApi,
  excluirCamisaApi,
  adicionarEstoqueApi,
} from "../../Api/conexao";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import ListaSuspensa from "../ListaSuspensa";
import MenuAdmin from "../MenuAdmin";
import "./produtos.css";

const ListaProdutos = () => {
  const [camisas, setCamisas] = useState([]);
  useEffect(() => atualizaCamisas());
  const [qtds] = useState(["100", "200", "300", "400", "500"]);
  const [quantidade, setQuantidade] = useState("");

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

  function adicionarQuantidade(camisa) {
    const estoque = {
      operacao: "Adicionar estoque",
      pedido: "0",
      quantidade: quantidade,
    };
    console.log(estoque);
    adicionarEstoqueApi(camisa.id, estoque);
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
              <td>Input</td>
              <td>Add Qtd</td>
              <td>Remover</td>
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
                <ListaSuspensa
                  items={qtds}
                  valor={quantidade}
                  aoAlterado={(valor) => setQuantidade(valor)}
                />
                <td>
                  <button
                    className="btn btn-success mb-3"
                    onClick={() => adicionarQuantidade(camisa)}
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
    </div>
  );
};

export default ListaProdutos;
