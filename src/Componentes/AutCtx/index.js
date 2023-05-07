import { createContext, useContext, useState } from "react";
import {
  autenticarApi,
  validaradminconexao,
  validaraclienteconexao,
} from "../../Api/conexao";

export const AutCtx = createContext();
export const useAutCtx = () => useContext(AutCtx);

export default function AutProvider({ children }) {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [isAdmin, setAdmin] = useState(false);
  const [isCliente, setCliente] = useState(false);

  async function autenticar(usuario, senha) {
    const credencial = { username: usuario, senha: senha };
    const resposta = await autenticarApi(credencial);
    const foiAutenticado = resposta.data;

    if (foiAutenticado) {
      setAutenticado(true);
      setUsuario(usuario);
      return true;
    } else {
      setAutenticado(false);
      setUsuario(null);
      return false;
    }
  }

  async function validaradmin(usuario, senha) {
    const credencial = { username: usuario, senha: senha };
    const respostaAdmin = await validaradminconexao(credencial);
    const ehAdmin = respostaAdmin.data;
    if (ehAdmin) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }

  async function validarcliente(usuario, senha) {
    const credencial = { username: usuario, senha: senha };
    const respostaCliente = await validaraclienteconexao(credencial);
    const ehCliente = respostaCliente.data;
    if (ehCliente) {
      setCliente(true);
    } else {
      setCliente(false);
    }
  }

  function sair() {
    setAutenticado(false);
    setAdmin(false);
    setCliente(false);
  }

  return (
    <AutCtx.Provider
      value={{ autenticado, isAdmin, isCliente, autenticar, validaradmin, validarcliente, sair, usuario }}
    >
      {children}
    </AutCtx.Provider>
  );
}
