import { createContext, useContext, useState } from "react";
import { autenticarApi } from "../../Api/conexao";

export const AutCtx = createContext();
export const useAutCtx = () => useContext(AutCtx);

export default function AutProvider({ children }) {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState(null);

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

    console.log("autenticou no AUTCTX " + autenticado);
    console.log("usuario no AUTCTX " + usuario);
    console.log("senha no AUTCTX " + senha);
  }

  function sair() {
    setAutenticado(false);
  }

  return (
    <AutCtx.Provider value={{ autenticado, autenticar, sair, usuario }}>
      {children}
    </AutCtx.Provider>
  );
}
