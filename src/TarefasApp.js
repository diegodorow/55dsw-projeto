import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecalho from "./Componentes/Cabecalho";
import Login from "./Componentes/Login";
import "./TarefasApp.css";
import FormUsuario from "./Componentes/FormUsuario";
import Banner from "./Componentes/Banner";
import Rodape from "./Componentes/Rodape";

export default function TarefasApp() {
  return (
    <div className="TarefasApp">
      <BrowserRouter>
        <Cabecalho></Cabecalho>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/formulario" element={<FormUsuario />} />
        </Routes>
      </BrowserRouter>
      <Rodape />
    </div>
  );
}
