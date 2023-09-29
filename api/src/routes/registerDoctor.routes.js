const { Router } = require(`express`);
const { registerDoctor } = require(`../controllers/login.js`);

const router = Router();

router.post(`/`, async (req, res) => {
  const { doctorName, doctorDni, password } = req.body;
  if (doctorName && doctorDni && password) {
    const respuesta = await registerDoctor(doctorName, doctorDni, password);
    console.log(respuesta);
    if (respuesta) {
      return res.status(200).send(true);
    }
  } else {
    return res.status(404).json({ message: "Algo ocurrio al registrar al nuevo médico" });
  }
});

module.exports = router;
