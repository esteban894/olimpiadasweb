const { Router } = require(`express`);
//ruta para login
const userLogin = require(`./userlogin.routes.js`);
const register = require("./register.routes.js");
const router = Router();
//abrir una ruta
router.use(`/login`, userLogin);
router.use("/register", register);

module.exports = router;
