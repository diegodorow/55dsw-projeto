import { useNavigate } from "react-router-dom";
import { useAutCtx } from "../AutCtx";
import { adicionarPedidoApi } from "../../Api/conexao";

export default function Carrinho() {
  const navigate = useNavigate();
  const autCtx = useAutCtx();
  let carrinho = autCtx.testeCar;
  const usuarioLogado = autCtx.usuarioLogado;
  const id_usuario = usuarioLogado.id;
  const entrega =
    usuarioLogado.entregaendereco +
    ", " +
    usuarioLogado.entreganumero +
    ", " +
    usuarioLogado.entregabairro +
    ", " +
    usuarioLogado.entregacep +
    ", " +
    usuarioLogado.entregacidade +
    " - " +
    usuarioLogado.entregauf;
  let total = 0;

  if (carrinho) {
    total = carrinho.reduce((total, soma) => total + soma.valor, 0);
  }

  let moeda = total.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  function confirmarPedido() {
    const pedido = {
      cartao: usuarioLogado.cartao,
      status: "0",
      valor: total,
      cliente: id_usuario,
      entrega: entrega,
    };
    adicionarPedidoApi(pedido, carrinho)
      .then((resposta) => {
        console.log(resposta);
        navigate("/menucliente");
      })
      .catch((erro) => console.log(erro));
    limparCarrinho();
  }

  async function limparCarrinho() {
    autCtx.limparCarrinho();
  }

  if (total > 0) {
    return (
      <div id="container-center-produtos">
        <div id="formatar-produtos">
          <h1>Confirme seu carrinho :)</h1>
          <table className="table">
            <thead>
              <tr>
                <td>Código</td>
                <td>Descrição do Produto</td>
                <td>Valor</td>
                <td>Tamanho</td>
                <td>Cor</td>
              </tr>
            </thead>
            <tbody>
              {carrinho.map((produto) => (
                <tr key={produto.id}>
                  <td>{produto.id}</td>
                  <td>{produto.descricao}</td>
                  <td>{produto.valor}</td>
                  <td>{produto.tamanho}</td>
                  <td>{produto.cor}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h1>Total: {moeda}</h1>
          <p>Cartão de crédito: {usuarioLogado.cartao}</p>
          <p>Entreço de entrega: {entrega}</p>
          <button
            className="botao"
            type="button"
            name="login-btn"
            onClick={confirmarPedido}
          >
            Confirmar pedido
          </button>
          <button
            className="botao"
            type="button"
            name="login-btn"
            onClick={limparCarrinho}
          >
            Limpar carrinho
          </button>
        </div>
      </div>
    );
  } else {
    return <h1>Seu carrinho está vazio</h1>;
  }
}
