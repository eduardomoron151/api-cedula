const { Router } = require('express');
const { check } = require('express-validator');


const { buscarCedula } = require('../controllers/buscar.controller');

const router = Router();

router.get('/:nacionalidad/:cedula',  buscarCedula);

module.exports = router;

