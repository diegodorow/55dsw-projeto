import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cabecalho from "./Componentes/Cabecalho";
import Login from "./Componentes/Login";
import AutProvider, { useAutCtx } from "./Componentes/AutCtx";
import "./TarefasApp.css";
import FormUsuario from "./Componentes/FormUsuario";
import Rodape from "./Componentes/Rodape";
import MenuAdmin from "./Componentes/MenuAdmin";
import MenuCliente from "./Componentes/MenuCliente";
import CadastroProduto from "./Componentes/CadastroProduto";
import ListaCliente from "./Componentes/ListaCliente";
import MaisVendidos from "./Componentes/MaisVendidos";
import Confirmacoes from "./Componentes/Confirmacoes";
import Recebimentos from "./Componentes/Recebimentos";
import ListaProdutos from "./Componentes/ListaProdutos";
import Galeria from "./Componentes/Galeria";

export default function TarefasApp() {
  function AuthenticatedRoute({ children }) {
    const autCtx = useAutCtx();
    if (autCtx.autenticado) {
      return children;
    }
    return <Navigate to="/" />;
  }

  return (
    <div className="TarefasApp">
      <AutProvider>
        <BrowserRouter>
          <Cabecalho></Cabecalho>
          <Routes>
            <Route path="/" element={<Galeria />} />
            <Route path="*" element={<Galeria />} />
            <Route path="/login" element={<Login />} />
            <Route path="/formulario" element={<FormUsuario />} />
            <Route path="/inicio" element={<Galeria />} />
            <Route
              path="/menuadmin"
              element={
                <AuthenticatedRoute>
                  <MenuAdmin />{" "}
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/menucliente"
              element={
                <AuthenticatedRoute>
                  {" "}
                  <MenuCliente />{" "}
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/cadastrarproduto"
              element={
                <AuthenticatedRoute>
                  <CadastroProduto />{" "}
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/listaproduto"
              element={
                <AuthenticatedRoute>
                  <ListaProdutos />{" "}
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/listacliente"
              element={
                <AuthenticatedRoute>
                  <ListaCliente />{" "}
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/maisvendidos"
              element={
                <AuthenticatedRoute>
                  <MaisVendidos />{" "}
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/confirmacoes"
              element={
                <AuthenticatedRoute>
                  <Confirmacoes />{" "}
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/recebimentos"
              element={
                <AuthenticatedRoute>
                  <Recebimentos />{" "}
                </AuthenticatedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
        <Rodape />
      </AutProvider>
    </div>
  );
}
