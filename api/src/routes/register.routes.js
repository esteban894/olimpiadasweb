const { Router } = require(`express`);
const { registerUser } = require(`../controllers/login.js`);

const router = Router();

router.post(`/:user/:password`, async (req, res) => {
  const { user, password } = req.params;
  if (user && password) {
    const respuesta = await registerUser(user, password);
    console.log(respuesta);
    if (respuesta) {
      return res.status(202).send(true); //Si el parametro "username" de la funcion "LoginUser" es igual al parametro "user"
      //que le dimos anteriormente, entonces sera true
    }
  } else {
    //ahi me fijo por que no me acuerdo ahhh entiendo
    return res.status(404).send(`algo ewsta mal`);
  }
});

module.exports = router;

//y aca masomenos para probar hice casi lo mismo de userlogin.routes.js
