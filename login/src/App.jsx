import { Route, Routes } from "react-router-dom"; // Importa las funciones 'React' y 'useState' desde sus respectivos módulos
import { Login } from "./components/loginAdmin.jsx";
import Register from "./components/registrarse.jsx";
import NewArea from "./components/resgistrararea.jsx";
import DoctorsPage from "./components/paginadoctores.jsx";
import PacientesTable from "./components/tablaPacientes.jsx";
import Alerts from "./components/tablaalertas.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DoctorsPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/nuevaArea" element={<NewArea />} />
      <Route path="/pacientes" element={<PacientesTable />} />
      <Route path="/alertas" element={<Alerts />} />
    </Routes>
  );
};

export default App; // Exporta el componente 'App' para que pueda ser utilizado en otros archivos
