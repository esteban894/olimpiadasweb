const { Router } = require(`express`);
const { loginUser } = require(`../controllers/login.js`);

const router = Router();
//para que funcione esto, debo ir al localhost:3000/login/usuario/contrasena
router.post("/", async (req, res) => {
  //aca se dice que se requiere un "User", y un "password"
  const { user, password } = req.body;
  if (user && password) {
    //si se ingreso un user y un password

    const respuesta = await loginUser(user, password); //aca se le da a la funcion "LoginUser" los parametros que le dimos anteriormente
    //console.log(respuesta); //ahhh guarda lo que resulte de la comparacion de datos
    if (!respuesta) {
      return res.status(202).send(false);
    }
    if (respuesta.username === user) {
      return res.status(202).send(true); //Si el parametro "username" de la funcion "LoginUser" es igual al parametro "user"
      //que le dimos anteriormente, entonces sera true
    }
  } else {
    //ahi me fijo por que no me acuerdo ahhh entiendo
    return res.status(404).json({ message: "Credenciales invalidas" });
  }
});

module.exports = router;

//desde aca?
