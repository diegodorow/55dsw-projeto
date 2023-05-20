import { useState, useEffect } from "react";
import { obterViagensApi, confirmarViagensApi } from "../../Api/conexao";
import { FaUnlock } from "react-icons/fa";
import MenuAdmin from "../MenuAdmin";
import "./viagens.css";

const Viagens = () => {
  const [viagens, setViagens] = useState([]);
  useEffect(() => atualizaViagens());

  function atualizaViagens() {
    obterViagensApi()
      .then((resposta) => {
        setViagens(resposta.data);
      })
      .catch((erro) => console.log(erro));
  }

  function confirmarEntrega(id, status) {
    if (status === 0) {
      status = 1;
    } else {
      status = 0;
    }
    const confirmar = { id: id, status: status };
    confirmarViagensApi(id, confirmar)
      .then((resposta) => {
        atualizaViagens();
      })
      .catch((erro) => console.log("aqui: " + erro));
  }

  return (
    <div id="container-center">
      <MenuAdmin />
      <div id="formatar-viagens">
        <h1>Viagens</h1>
        <table className="table">
          <thead>
            <tr>
              <td>Viagem</td>
              <td>Pedido</td>
              <td>Valor da compra</td>
              <td>Endereço de entrega</td>
              <td>Status</td>
              <td>Previsão de entrega</td>
              <td>Confirmar</td>
            </tr>
          </thead>
          <tbody>
            {viagens.map((viagem) => (
              <tr key={viagem.id}>
                <td>{viagem.id}</td>
                <td>{viagem.pedido}</td>
                <td>{viagem.valor}</td>
                <td>{viagem.entrega}</td>
                <td>
                  {viagem.status === 2
                    ? "Entregue"
                    : viagem.status === 1
                    ? "Em trânsito"
                    : "Aguardando"}
                </td>
                <td >{new Date(`${viagem.previsao}`).toDateString()}</td>
                <td>
                  <button
                    className="btn btn-success mb-3"
                    onClick={() => confirmarEntrega(viagem.id, viagem.status)}
                  >
                    {viagem.status === 0 ? <FaUnlock /> : ""}
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

export default Viagens;
