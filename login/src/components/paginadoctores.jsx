import { useState } from "react"; // Importa las funciones 'React' y 'useState' desde sus respectivos módulos
import axios from "axios";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { environment } from "./../../env";

const DoctorsPage = () => {
  // Define un componente funcional llamado 'App'

  const [errorMessage, setErrorMessage] = useState(null);

  const { base_url } = environment;

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (Object.keys(errors).length === 0) {
      try {
        await axios.post(`${base_url}/doctores`, data);
        // const response = await axios.post(`${base_url}/users`, data);
        // console.log(response);

        navigate("/doctores");
      } catch (error) {
        setErrorMessage(error.response.data.message);
        reset();
      }
    }
  };

  return (
    <div className="container bg-primary p-4 rounded col-md-6 mt-4">
      {" "}
      {/* Inicio del contenido del componente */}
      <h2>Nuevo Doctor</h2> {/* Título del formulario */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="doctorName" className="form-label">
            Nombre
          </label>
          <input
            className="form-control"
            type="text"
            {...register("doctorName", { required: true })}
            placeholder="Nombre del doctor"
            autoFocus
            id="doctorName"
          />
          {errors.doctorName && (
            <small className="text-danger alert">Este campo es requerido</small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="doctorDni" className="form-label">
            Dni
          </label>
          <input
            className="form-control"
            type="text"
            {...register("doctorDni", { required: true })}
            placeholder="37912571"
            id="doctorDni"
          />
          {errors.doctorDni && <small className="text-danger alert">Este campo es requerido</small>}
        </div>
        <div className="form-group">
          {" "}
          {/* Grupo de entrada para la contraseña */}
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            className="form-control"
            type="password"
            {...register("password", { required: true })}
            placeholder="..."
            id="password"
          />
          {errors.password && <small className="text-danger alert">Este campo es requerido</small>}
        </div>
        <button type="submit" className="btn btn-success mt-3">
          Registrarse
        </button>
        {/* Botón para enviar el formulario */}
      </form>
      {errorMessage && (
        <div className="alert alert-danger mt-3" role="alert">
          Error al iniciar sesión: {errorMessage}
        </div>
      )}
    </div>
    /* Fin del contenido del componente */
  );
};

export default DoctorsPage; // Exporta el componente 'App' para que pueda ser utilizado en otros archivos
