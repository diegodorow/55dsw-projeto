import "./menuadmin.css";
import { Link } from "react-router-dom";

export default function MenuAdmin() {
  return (
    <div className="menu">
      <ul>
        <li className="menu">
          <Link className="menu" to="/listaproduto">
            Produto
          </Link>
        </li>
        <li className="menu">
          <Link className="menu" to="/listacliente">
            Clientes
          </Link>
        </li>
        <li className="menu">
          <Link className="menu" to="/maisvendidos">
            Dashboard
          </Link>
        </li>
        <li className="menu">
          <Link className="menu" to="/confirmacoes">
            Confirmações
          </Link>
        </li>
        <li className="menu">
          <Link className="menu" to="/recebimentos">
            Recebimentos
          </Link>
        </li>
        <li className="menu">
          <Link className="menu" to="/viagens">
            Viagens
          </Link>
        </li>
      </ul>
    </div>
  );
}
