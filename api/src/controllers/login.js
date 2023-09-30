const { Client } = require("pg");
// const { log } = require("console");
// const readline = require("readline");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "logiiins",
  password: "admin",
  port: 5432,
});

// Conecta a la base de datos
client
  .connect()
  .then(() => console.log("Conexión exitosa a la base de datos"))
  .catch((err) => console.error("Error al conectar a la base de datos:", err));

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// async function iniciarSesion() {
//   rl.question("Ingrese su nombre de usuario: ", async function (nombreUsuario) {
//     rl.question("Ingrese su contraseña: ", async function (password_user) {
//       const usuarioAutenticado = await loginUser(nombreUsuario, password_user);
//       if (usuarioAutenticado) {
//         console.log("Inicio de sesión exitoso:", usuarioAutenticado);
//       } else {
//         console.log("Nombre de usuario o contraseña incorrectos");
//       }

//       rl.close();
//       client.end();
//     });
//   });
// }

//iniciarSesion();

module.exports = {
  loginUser: async (username, password_user) => {
    //esta funcion procesa los datos que se ingrese, osea hace la consulta sql
    console.log(username, password_user);
    try {
      const query = "SELECT * FROM users WHERE username = $1";
      const result = await client.query(query, [username]);
      console.log(result);
      const user = result.rows[0];

      if (user.lenght < 1) {
        return false; // Usuario no encontrado
      }

      const passwordMatch = password_user === user.password_user;
      console.log(passwordMatch);
      return passwordMatch ? user : false;
      // Retorna el usuario si la contraseña coincide, de lo contrario false
    } catch (error) {
      console.error("Error al intentar hacer login:", error);
      return false;
    }
  },

  registerUser: async (username, password_user) => {
    try {
      const query = "INSERT INTO users (username, password_user) VALUES ($1, $2)";
      const result = await client.query(query, [username, password_user]);

      if (result.rowCount === 1) {
        return true; // Usuario registrado exitosamente
      } else {
        return false; // No se pudo insertar el usuario
      }
    } catch (error) {
      console.error("Error al intentar registrar usuario:", error);
      return false;
    }
  },
  registerDoctor: async (doctorName, doctorDni, password) => {
    try {
      const query = "INSERT INTO doctores (name, dni, password) VALUES ($1, $2, $3)";
      const result = await client.query(query, [doctorName, doctorDni, password]);

      if (result.rowCount === 1) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error al intentar registrar al médico:", error);
      return false;
    }
  },
};

//Bueno, aca se impoorta toda esta funcion
//esta es la funcion para anadir los datos a la base de datos
