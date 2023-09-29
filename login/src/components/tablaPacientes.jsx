import React from "react";
import { Link } from "react-router-dom";


const PacientesTable = () => {
  const data = [
    {
      fecha: "26/09/2023",
      nombre: "Nicolas Gonzales",
      motivo: "Pulmon atravesado",
      estado: "Atendido",
    },
    {
      fecha: "11/12/2023",
      nombre: "Matias Rojas",
      motivo: "Arteria Reventada",
      estado: "No Atendido",
    },
    {
      fecha: "11/02/2023",
      nombre: "Ana Gerez",
      motivo: "Problemas de corazón",
      estado: "Atendida",
    },
    // Agrega más datos según sea necesario
  ];

  return (
    <div className="container">
      <nav>
      <ul>
        <li>
          <Link to="/">Crear nuevo Doctor</Link>
        </li>

        <li>
          <Link to="/nuevaArea">Crear nueva Area</Link>
        </li>

        <li>
          <Link to="/pacientes">Pacientes</Link>
        </li>

        <li>
          <Link to="/alertas">Alertas</Link>
        </li>

       
        
      </ul>
    </nav>
      <h1 className="mt-4 mb-4">Pacientes</h1>
      <div className="row">
        <div className="col">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Nombre</th>
                <th>Motivo de Alerta</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.fecha}</td>
                  <td>{item.nombre}</td>
                  <td>{item.motivo}</td>
                  <td>{item.estado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PacientesTable;
