import { Route, Routes } from "react-router-dom"; // Importa las funciones 'React' y 'useState' desde sus respectivos módulos
import { Login } from "./components/logindocotresadmin.jsx";
import DoctorsPage from "./components/paginadoctores.jsx";
import Register from "./components/registrarse.jsx";
// Importa una hoja de estilos CSS llamada 'App.css'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registrarse" element={<Register />} />
      <Route path="/doctores" element={<DoctorsPage />} />
    </Routes>
  );
};

export default App; // Exporta el componente 'App' para que pueda ser utilizado en otros archivos
