import { useState, useEffect } from "react";
import {
  obterPedidosApi,
  confirmarPedidosApi,
  adicionarViagemApi,
} from "../../Api/conexao";
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

  function confirmarPedidos(id, status, entrega, valor, cliente) {
    if (status === 0) {
      status = 1;
    } else if (status === 1) {
      status = 0;
    }
    const bloqueio = { id: id, status: status };
    confirmarPedidosApi(id, bloqueio)
      .then((resposta) => {
        atualizaPedidos();
      })
      .catch((erro) => console.log("aqui: " + erro));

    if (status === 1) {
      adicionarViagem(id, entrega, valor, cliente);
    }
  }

  function adicionarViagem(id, entrega, valor, cliente) {
    const viagem = {
      pedido: id,
      valor: valor,
      entrega: entrega,
      status: "0",
      cliente: cliente,
    };
    adicionarViagemApi(viagem)
      .then((resposta) => {
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
              <td>Número do cartão</td>
              <td>Valor da compra</td>
              <td>Status</td>
              <td>Confirmar</td>
              <td>Bloquear</td>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => (
              <tr key={pedido.id}>
                <td>{pedido.id}</td>
                <td>{pedido.cartao}</td>
                <td>{pedido.valor}</td>
                <td>{pedido.status === 0 ? "Pendente" : pedido.status === 1 ? "Confirmado" : "Bloqueado"}</td>
                <td>
                  <button
                    className="btn btn-success mb-3"
                    onClick={() =>
                      confirmarPedidos(
                        pedido.id,
                        pedido.status,
                        pedido.entrega,
                        pedido.valor,
                        pedido.cliente
                      )
                    }
                  >
                    {pedido.status === 0 ? <FaUnlock /> : ""}
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success mb-3"
                    onClick={() =>
                      confirmarPedidos(
                        pedido.id,
                        "2",
                        pedido.entrega,
                        pedido.valor,
                        pedido.cliente
                      )
                    }
                  >
                    {pedido.status === 0 ? <FaBan /> : ""}
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
