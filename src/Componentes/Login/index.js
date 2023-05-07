import { Link } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAutCtx } from "../AutCtx";
import Botao from "../Botao";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [loginSucesso] = useState(false);
  const [loginFalhou, setLoginFalhou] = useState(false);
  const navigate = useNavigate();
  const autCtx = useAutCtx();

  function usuarioHandler(event) {
    setUsuario(event.target.value);
  }

  function senhaHandler(event) {
    setSenha(event.target.value);
  }

  async function loginHandler(event) {
    if (await autCtx.autenticar(usuario, senha)) {
      entraAdmin();
      entraCliente();
      navigate("/inicio");
    } else {
      setLoginFalhou(true);
    }
  }

  async function entraAdmin(event) {
    await autCtx.validaradmin(usuario, senha);
  }

  async function entraCliente(event) {
    await autCtx.validarcliente(usuario, senha);
  }

  return (
    <div className="formulario-container">
      {loginSucesso && (
        <div className="SucessoMsg">Autenticado com sucesso!</div>
      )}
      {loginFalhou && (
        <div className="FalhouMsg">
          A autenticação falhou, confira seu login e senha!
        </div>
      )}

      <div className="formulario">
        <div className="login">
          <label>Usuário: </label>
          <input
            type="text"
            name="usuario"
            value={usuario}
            onChange={usuarioHandler}
          ></input>
        </div>
        <div className="login">
          <label>Senha: </label>
          <input
            type="password"
            name="senha"
            value={senha}
            onChange={senhaHandler}
          ></input>
        </div>
        <div>
          <button
            className="botao"
            type="button"
            name="login-btn"
            onClick={loginHandler}
          >
            Login
          </button>
          <Link to="/formulario">
            <Botao texto="Cadastrar usuário" />
          </Link>
        </div>
      </div>
    </div>
  );
}
