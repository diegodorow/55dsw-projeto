import { useState, useEffect } from "react";
import { obterPedidosApi, confirmarPedidosApi } from "../../Api/conexao";
import { FaBan, FaUnlock } from "react-icons/fa";
import MenuAdmin from "../MenuAdmin";
import "./confirmacoes.css";

const Confirmacoes = () => {
  const [pedidos, setPedidos] = useState([]);
  useEffect(() => atualizaPedidos());

  function atualizaPedidos() {
    obterPedidosApi()
      .then((resposta) => {
        setPedidos(resposta.data);
      })
      .catch((erro) => console.log(erro));
  }

  function confirmarPedidos(id, status) {
    if (status === 0) {
      status = 1;
    } else {
      status = 0;
    }
    const bloqueio = { id: id, status: status };
    confirmarPedidosApi(id, bloqueio)
      .then((resposta) => {
        atualizaPedidos();
      })
      .catch((erro) => console.log("aqui: " + erro));
  }

  return (
    <div id="container-center">
      <MenuAdmin />
      <div id="formatar">
        <h1>Confirmações</h1>
        <table className="table">
          <thead>
            <tr>
              <td>Pedido</td>
              <td>Nome do cliente</td>
              <td>Número do cartão</td>
              <td>Valor da compra</td>
              <td>Status</td>
              <td>Confirmar</td>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => (
              <tr key={pedido.id}>
                <td>{pedido.id}</td>
                <td>{pedido.nome}</td>
                <td>{pedido.cartao}</td>
                <td>{pedido.valor}</td>
                <td>{pedido.status === 1 ? "Confirmado" : "Bloqueado"}</td>
                <td>
                  <button
                    className="btn btn-success mb-3"
                    onClick={() => confirmarPedidos(pedido.id, pedido.status)}
                  >
                    {pedido.status === 1 ? <FaBan /> : <FaUnlock />}
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

export default Confirmacoes;
