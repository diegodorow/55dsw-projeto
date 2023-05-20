import { useState, useEffect } from "react";
import { obterClientesApi, bloquearClientesApi } from "../../Api/conexao";
import { FaBan, FaUnlock } from "react-icons/fa";
import MenuAdmin from "../MenuAdmin";
import "./listaclientes.css";

const ListaClientes = () => {
  const [clientes, setClientes] = useState([]);
  useEffect(() => atualizaClientes());

  function atualizaClientes() {
    obterClientesApi()
      .then((resposta) => {
        setClientes(resposta.data);
      })
      .catch((erro) => console.log(erro));
  }

  function bloquearCliente(id, status) {
    if (status === 0) {
      status = 1;
    } else {
      status = 0;
    }
    const bloqueio = { id: id, status: status };
    bloquearClientesApi(id, bloqueio)
      .then((resposta) => {
        atualizaClientes();
      })
      .catch((erro) => console.log("aqui: " + erro));
  }

  return (
    <div id="container-center">
      <MenuAdmin />
      <div id="formatar-clientes">
        <h1>Lista de Clientes</h1>
        <table className="table">
          <thead>
            <tr>
              <td>Código</td>
              <td>Nome Cliente</td>
              <td>Status</td>
              <td>Bloquear</td>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.status === 1 ? "Ativo" : "Bloqueado"}</td>
                <td>
                  <button
                    className="btn btn-success mb-3"
                    onClick={() => bloquearCliente(cliente.id, cliente.status)}
                  >
                    {cliente.status === 1 ? <FaBan /> : <FaUnlock />}
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

export default ListaClientes;
