import { useAutCtx } from "../AutCtx";

export default function Carrinho() {
  const autCtx = useAutCtx();
  const carrinho = autCtx.testeCar;
  let total = carrinho.reduce((total, soma) => total + soma.valor, 0);
  let moeda = total.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  function confirmarPedido() {
    console.log("clicou para confirmar pedido");
  }

  return (
    <div id="container-center-produtos">
      <div id="formatar-produtos">
        <h1>Produtos no carrinho</h1>
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
        <button
          className="botao"
          type="button"
          name="login-btn"
          onClick={confirmarPedido}
        >
          Confirmar pedido
        </button>
      </div>
    </div>
  );
}
