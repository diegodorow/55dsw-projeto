import { useAutCtx } from "../AutCtx";
import { useState, useEffect } from "react";
import { obterPedidosClienteApi } from "../../Api/conexao";

export default function MenuCliente() {
  const autCtx = useAutCtx();
  const usuarioLogado = autCtx.usuarioLogado;
  const id_usuario = usuarioLogado.id;

  const [pedidos, setPedidos] = useState([]);
  useEffect(() => atualizaPedidos());

  function atualizaPedidos() {
    obterPedidosClienteApi(id_usuario)
      .then((resposta) => {
        setPedidos(resposta.data);
      })
      .catch((erro) => console.log(erro));
  }

  return (
    <div>
      <h1>{usuarioLogado.nome}, acompanhe seus pedidos:</h1>
      <table className="table">
        <thead>
          <tr>
            <td>Pedido</td>
            <td>Valor da compra</td>
            <td>Cartão de crédito</td>
            <td>Endereço entrega</td>
            <td>Previsão:</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.id}>
              <td>{pedido.id}</td>
              <td>{pedido.valor}</td>
              <td>{pedido.cartao}</td>
              <td>{pedido.entrega}</td>
              <td>{new Date(`${pedido.previsao}`).toDateString()}</td>
              <td>{pedido.status === 0 ? "Pendente" : pedido.status === 1 ? "Confirmado" : "Bloqueado"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
