import React, { useState, useEffect } from 'react';
import { obtenerDatosDePacientes } from '../../../api/src/controllers/login.js';

function PacientesList() {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    // Llama a la función para obtener los datos de pacientes
    obtenerDatosDePacientes()
      .then((data) => setPacientes(data))
      .catch((error) => console.error('Error al obtener datos de pacientes:', error));
  }, []);

  return (
    <div>
      <h1>Listado de Pacientes</h1>
      <ul>
        {pacientes.map((users) => (
          <li key={users.id}>
            Nombre: {users.username}<br />
            Apellido: {users.password_user}<br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PacientesList;
