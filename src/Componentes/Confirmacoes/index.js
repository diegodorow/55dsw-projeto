import MenuAdmin from "../MenuAdmin";
import "./confirmacoes.css";

const Confirmacoes = () => {
  return (
    <div id="container-center">
      <MenuAdmin />
      <div id="formatar">
        <h1>Confirmações</h1>
        <table className="table">
          <thead>
            <tr>
              <td>Pedido</td>
              <td>Data do pedido</td>
              <td>Nome do cliente</td>
              <td>Número do cartão</td>
              <td>Valor da compra</td>
              <td>Confirmar</td>
              <td>Bloquear</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Confirmacoes;
