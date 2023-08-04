const { Router } = require('express');

const DogsRoutes = require('./DogsRoutes.js');
const TemperamentsRoutes = require('./TemperamentsRoutes.js');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use("/dogs", DogsRoutes);

router.use("/temperaments", TemperamentsRoutes);

module.exports= router;