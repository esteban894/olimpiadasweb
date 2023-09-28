const { Router } = require(`express`); //aca se dice que se requiere un componente "Router" de el paquete "Cliente"

//ruta para login
const userRegister = require(`./register.routes.js`); //esta variable es igual a un codigo llamado "userlogin.routes.js"
const router = Router();
//abrir una ruta
router.use(`/register`, userRegister);

module.exports = router;
