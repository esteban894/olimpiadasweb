import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const RegisterPaciente = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (Object.keys(errors).length === 0) {
      try {
        // Realizar una solicitud POST al servidor para registrar al paciente
        await axios.post("/api/pacientes", data);

        // Limpiar el formulario después del registro exitoso
        reset();
      } catch (error) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <h2>Registro de Pacientes</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Campos del formulario para nombre, apellido, DNI, etc. */}
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" {...register("nombre", { required: true })} />
          {errors.nombre && <span>Este campo es requerido</span>}
        </div>
        {/* Otros campos del formulario */}
        {/* ... */}

        <button type="submit">Registrar</button>
      </form>
      {errorMessage && <div>Error al registrar: {errorMessage}</div>}
    </div>
  );
};

export default RegisterPaciente;
