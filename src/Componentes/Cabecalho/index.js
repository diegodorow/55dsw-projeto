import { Link } from "react-router-dom";
import "./cabecalho.css";
import { useAutCtx } from "../AutCtx";
import { FaShoppingCart } from "react-icons/fa";

export default function Cabecalho() {
  const autCtx = useAutCtx();
  const foiAutenticado = autCtx.autenticado;
  const usuarioAdmin = autCtx.isAdmin;
  const usuarioCliente = autCtx.isCliente;

  function sair() {
    autCtx.sair();
  }

  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="cabecalho" to="/">
                    Início
                  </Link>
                </li>
                <li className="nav-item">
                  {usuarioAdmin && (
                    <Link className="cabecalho" to="/menuadmin">
                      Administrador
                    </Link>
                  )}
                </li>
                <li className="nav-item">
                  {usuarioCliente && (
                    <Link className="cabecalho" to="/menucliente">
                      Cliente
                    </Link>
                  )}
                </li>
              </ul>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                {usuarioCliente && (
                  <Link className="cabecalho" to="/carrinho">
                    <FaShoppingCart>Cliente</FaShoppingCart>
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {!foiAutenticado && (
                  <Link className="cabecalho" to="/login">
                    Entrar
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {foiAutenticado && (
                  <Link className="cabecalho" to="/login" onClick={sair}>
                    Sair
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
