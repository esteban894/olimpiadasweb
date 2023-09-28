import React, { useState } from 'react';
import axios from 'axios';
import './logindoctoresadmin.css';
import { useNavigate } from 'react-router-dom';

// Importa una hoja de estilos CSS llamada 'App.css'

const Login = () => {
  // Define un componente funcional llamado 'App'
  const [user, setUser] = useState(''); // Declara un estado 'user' con su función 'setter' 'setUser', inicializado como cadena vacía
  const [password, setPassword] = useState(''); // Declara un estado 'password' con su función 'setter' 'setPassword', inicializado como cadena vacía// Declara un estado 'errorMessage' con su función 'setter' 'setErrorMessage', inicializado como cadena vacía
  const [getOk, setgetOkey] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Declara un estado 'getOk' con su función 'setter' 'setgetOkey', inicializado como cadena vacía

  const handleSubmit = async (e) => {
    // Declara una función 'handleSubmit' que se ejecuta cuando el formulario se envía
    e.preventDefault();
    //console.log(user, password); // Imprime en la consola los valores actuales de 'user' y 'password'

    try {
      const response = await axios.get(
        `http://localhost:3000/login/${user}/${password}`
      );
      // Realiza una solicitud GET a una URL formada con los valores de 'user' y 'password'
      console.log(response.data); // Imprime en la consola los datos recibidos como respuesta

      if (response.data) {
        setErrorMessage('');
        setgetOkey(true); 
        navigate('/doctores');// Si los datos de respuesta existen, establece 'getOk' como verdadero (true)
      } else {
        setErrorMessage(true);
        setgetOkey(false); // Si los datos de respuesta no existen, establece un mensaje de error
      }
    } catch (error) {
      console.error(error); // Si ocurre un error en la solicitud, imprime el error en la consola
      setErrorMessage('Hubo un error al intentar iniciar sesión');
      setgetOkey(false); // Establece un mensaje de error
    }
  };

  return (
    <div className="container">
      {/* Inicio del contenido del componente */}
      <h2>Iniciar Sesion</h2> {/* Título del formulario */}
      <form onSubmit={handleSubmit}>
        {' '}
        {/* Formulario que se envía cuando se hace clic en el botón */}
        <div className="form-group">
          {' '}
          {/* Grupo de entrada para el nombre de usuario */}
          <label>Usuario:</label>
          <input
            className="a1"
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="form-group1">
          {' '}
          {/* Grupo de entrada para la contraseña */}
          <label>Contraseña:</label>
          <input
            className="a2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar Sesion</button>{' '}
        {/* Botón para enviar el formulario */}
      </form>
      <p className="texto">
        Si no tienes una cuenta{' '}
        <a className="texto" href="pagina-de-inicio-de-sesion.html">
          Registrate
        </a>
        .
      </p>
      {getOk && <p className="sucess">si esta registrado</p>}{' '}
      {/* Muestra un mensaje de éxito si 'getOk' es verdadero */}
    </div>
    /* Fin del contenido del componente */
  );
};

export default Login; // Exporta el componente 'App' para que pueda ser utilizado en otros archivos
