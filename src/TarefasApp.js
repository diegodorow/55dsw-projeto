import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cabecalho from "./Componentes/Cabecalho";
import Login from "./Componentes/Login";
import AutProvider, { useAutCtx } from "./Componentes/AutCtx";
import "./TarefasApp.css";
import FormUsuario from "./Componentes/FormUsuario";
import Banner from "./Componentes/Banner";
import Rodape from "./Componentes/Rodape";

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
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/formulario" element={<FormUsuario />} />
            <Route
              path="/inicio"
              element={
                <AuthenticatedRoute>
                  <Banner />
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
