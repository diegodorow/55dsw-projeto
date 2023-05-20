import MenuAdmin from "../MenuAdmin";
import "./maisvendidos.css";

const MaisVendidos = () => {
  
  return (
    <div id="container-center">
      <MenuAdmin />
      <div id="formatar">
        <h1>Dashboard</h1>
        <table className="table">
          <thead>
            <tr>
              <td>Código</td>
              <td>Descrição do Produto</td>
              <td>Quantidade</td>
              <td>Valor</td>
              <td>Última Compra</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default MaisVendidos;
