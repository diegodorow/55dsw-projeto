import MenuAdmin from "../MenuAdmin";
import "./listaclientes.css";

const ListaClientes = () => {
  return (
    <div id="container-center">
      <MenuAdmin />
      <div id="formatar">
        <h1>Lista de Clientes</h1>
        <table className="table">
          <thead>
            <tr>
              <td>Código</td>
              <td>Nome Cliente</td>
              <td>Última Compra</td>
              <td>Bloquear</td>
              <td>Editar</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default ListaClientes;
