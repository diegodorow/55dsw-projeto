import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="formulario-container">
      <div className="formulario">
      <h2>Informe os dados para acessar o site :)</h2>
        <div>
          <label>Usuário: </label>
          <input type="text" name="usuario"></input>
        </div>
        <div>
          <label>Senha: </label>
          <input type="text" name="senha"></input>
        </div>
        <div>
          <button type="button" name="login-btn">
            Login
          </button>
          <Link type="button" className="nav-link" to="/formulario">
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}
