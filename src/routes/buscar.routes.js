const { Router } = require('express');
const { check } = require('express-validator');


const { buscarCedula } = require('../controllers/buscar.controller');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/:nacionalidad/:cedula', [
    check('nacionalidad', 'La nacionalidad es V o E').isIn(['V', 'E']),
    check('cedula', 'La cedula debe ser mayor a 6 caracteres').isLength({min : 6}),
    validarCampos
], buscarCedula);

module.exports = router;

