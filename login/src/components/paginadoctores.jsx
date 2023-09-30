import { useState } from "react"; // Importa las funciones 'React' y 'useState' desde sus respectivos módulos
import axios from "axios";
import { Link } from "react-router-dom";

// Importa una hoja de estilos CSS llamada 'App.css'

const DoctorsPage = () => {
  // Define un componente funcional llamado 'App'
  const [user, setUser] = useState(""); // Declara un estado 'user' con su función 'setter' 'setUser', inicializado como cadena vacía
  const [password, setPassword] = useState(""); // Declara un estado 'password' con su función 'setter' 'setPassword', inicializado como cadena vacía
  const [errorMessage, setErrorMessage] = useState(""); // Declara un estado 'errorMessage' con su función 'setter' 'setErrorMessage', inicializado como cadena vacía
  const [getOk, setgetOkey] = useState("");
  const [Ficha, setFicha] = useState(""); // Declara un estado 'getOk' con su función 'setter' 'setgetOkey', inicializado como cadena vacía

  const handleSubmit = async (e) => {
    // Declara una función 'handleSubmit' que se ejecuta cuando el formulario se envía
    e.preventDefault(); // Previene el comportamiento de envío predeterminado del formulario
    //console.log(user, password); // Imprime en la consola los valores actuales de 'user' y 'password'

    try {
      const response = await axios.post(`http://localhost:3000/login/${user}/${password}`);
      //y aca de la misma forma que en el inicio de sesion, pero use el metodo post para que reciba estos parametros
      console.log(response.data); // Imprime en la consola los datos recibidos como respuesta

      if (response.data) {
        setErrorMessage("");
        setgetOkey(true); // Si los datos de respuesta existen, establece 'getOk' como verdadero (true)
      } else {
        setErrorMessage(true);
        setgetOkey(false); // Si los datos de respuesta no existen, establece un mensaje de error
      }
    } catch (error) {
      console.error(error); // Si ocurre un error en la solicitud, imprime el error en la consola
      setErrorMessage("Hubo un error al intentar iniciar sesión");
      setgetOkey(false); // Establece un mensaje de error
    }
  };

  return (
    <div className="container bg-primary p-4 rounded col-md-6 mt-4">
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
      {/* Inicio del contenido del componente */}
      <h2>Nuevo Doctor</h2> {/* Título del formulario */}
      <form onSubmit={handleSubmit}>
        {" "}
        {/* Formulario que se envía cuando se hace clic en el botón */}
        <div className="form-group">
          {" "}
          {/* Grupo de entrada para el nombre de usuario */}
          <label className="form-label">Nombre:</label>
          <input
            className="form-control"
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="form-group">
          {" "}
          {/* Grupo de entrada para la contraseña */}
          <label className="form-label">Dni:</label>
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          {" "}
          {/* Grupo de entrada para la contraseña */}
          <label className="form-label">Ficha del Doctor:</label>
          <input
            className="form-control"
            type="text"
            value={Ficha}
            onChange={(e) => setFicha(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success mt-3">
          Registrarse
        </button>{" "}
        {/* Botón para enviar el formulario */}
      </form>
      {errorMessage && <p className="error-message">no se encuentra tu usuario</p>}{" "}
      {/* Muestra el mensaje de error si existe */}
      {getOk && <p className="sucess">si esta registrado</p>}{" "}
      {/* Muestra un mensaje de éxito si 'getOk' es verdadero */}
    </div>
    /* Fin del contenido del componente */
  );
};

export default DoctorsPage; // Exporta el componente 'App' para que pueda ser utilizado en otros archivos
