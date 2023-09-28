const { Router } = require(`express`);
const { registerUser } = require(`../controllers/login.js`);

const router = Router();

router.post(`/`, async (req, res) => {
  const { user, password } = req.body;
  if (user && password) {
    const respuesta = await registerUser(user, password);
    console.log(respuesta);
    if (respuesta) {
      return res.status(200).send(true); //Si el parametro "username" de la funcion "LoginUser" es igual al parametro "user"
      //que le dimos anteriormente, entonces sera true
    }
  } else {
    //ahi me fijo por que no me acuerdo ahhh entiendo
    return res.status(404).json({ message: "Algo ocurrio al registrarse" });
  }
});

module.exports = router;

//y aca masomenos para probar hice casi lo mismo de userlogin.routes.js
