import { useState, useEffect } from "react";
import { obterPedidosApi } from "../../Api/conexao";
import MenuAdmin from "../MenuAdmin";
import "./recebimentos.css";

const Recebimentos = () => {
  const [pedidos, setPedidos] = useState([]);
  useEffect(() => atualizaPedidos());

  function atualizaPedidos() {
    obterPedidosApi()
      .then((resposta) => {
        setPedidos(resposta.data);
      })
      .catch((erro) => console.log(erro));
  }

  return (
    <div id="container-center">
      <MenuAdmin />
      <div id="formatar">
        <h1>Recebimentos</h1>
        <table className="table">
          <thead>
            <tr>
              <td>Pedido</td>
              <td>Nome do cliente</td>
              <td>Número do cartão</td>
              <td>Valor da compra</td>
              <td>Status</td>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Recebimentos;
