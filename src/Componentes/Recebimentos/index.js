import MenuAdmin from "../MenuAdmin";
import "./recebimentos.css";

const Recebimentos = () => {
  return (
    <div id="container-center">
      <MenuAdmin />
      <div id="formatar">
        <h1>Recebimentos</h1>
        <table className="table">
          <thead>
            <tr>
              <td>Pedido</td>
              <td>Data do pedido</td>
              <td>Nome do cliente</td>
              <td>Número do cartão</td>
              <td>Valor da compra</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Recebimentos;
