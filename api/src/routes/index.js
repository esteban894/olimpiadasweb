const { Router } = require(`express`);
//ruta para login
const userLogin = require(`./userlogin.routes.js`);
const router = Router();
//abrir una ruta
router.use(`/login`, userLogin);

module.exports = router;
