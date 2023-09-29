const { obtenerDatosDePacientes } = require("../controllers/login"); // Reemplaza con la ruta correcta al archivo

// Luego, en tu componente React
async function mostrarDatosDePacientes() {
  const datos = await obtenerDatosDePacientes();
  console.log(datos); // Hacer algo con los datos, como renderizarlos en tu componente
}

// Llama a la función para obtener y mostrar los datos
mostrarDatosDePacientes();
