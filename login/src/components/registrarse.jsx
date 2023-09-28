import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { environment } from "./../../env";

const Register = () => {
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
        await axios.post(`${base_url}/register`, data);
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
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="user" className="form-label">
            Usuario
          </label>
          <input
            className="form-control"
            type="text"
            {...register("name", { required: true })}
            placeholder="Nombre"
            autoFocus
            id="user"
          />
          {errors.name && <small className="text-danger alert">Este campo es requerido</small>}
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
          />
          {errors.password && <small className="text-danger alert">Este campo es requerido</small>}
        </div>
        <button type="submit" className="btn btn-success mt-3">
          Registrarse
        </button>
      </form>
      <div>
        Si ya tienes una cuenta{" "}
        <Link to="/" className="link-light">
          Inicia Sesion
        </Link>
      </div>
      {errorMessage && (
        <div className="alert alert-danger mt-3" role="alert">
          Error al iniciar sesión: {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Register;
