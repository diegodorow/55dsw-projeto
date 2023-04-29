import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Início
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Administrador
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Entrar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sair">
                  Sair
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
