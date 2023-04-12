const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const recipes = require("./recipes");
const types = require("./types");
const recipe = require("./recipe");
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipes", recipes);
router.use("/recipes", recipe);
router.use("/diets", types);

module.exports = router;
