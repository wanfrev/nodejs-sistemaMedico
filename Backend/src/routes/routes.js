
const express = require('express');
const router = express.Router();
const dispatcher = require('../../Dispatcher/dispatcher');
const methodController = require('../controllers/methodController');
const { validate } = require('../middlewares/validationMiddleware');
const { processMethodValidation } = require('../validations/methodValidations');

// Ruta protegida con Dispatcher y validación de datos
router.post(
    '/toProcess',
    validate(processMethodValidation), // Validación de datos
    dispatcher(['admin', 'manager'], db), // Validación de sesión y permisos
    (req, res, next) => {
        try {
            methodController.invokeMethod(req.body);
            res.status(200).send('Método procesado correctamente');
        } catch (error) {
            next(new Error('Error al procesar el método'));
        }
    }
);

module.exports = router;