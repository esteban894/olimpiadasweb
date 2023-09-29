const { Router } = require(`express`);
//ruta para login
const userLogin = require(`./userlogin.routes.js`);
const register = require("./register.routes.js");
const doctores = require("./registerDoctor.routes.js");
const router = Router();
//abrir una ruta
router.use(`/login`, userLogin);
router.use("/register", register);
router.use("/doctores", doctores);

module.exports = router;
