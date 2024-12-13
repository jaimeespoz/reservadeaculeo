const express = require('express');
const router = express.Router();

const EstadoCivilController = require('../controllers/EstadoCivilController');

router
    .route('')
    .get(EstadoCivilController.getAll)
    .post(EstadoCivilController.add)
    .put(EstadoCivilController.update)
    .delete(EstadoCivilController.del);

router.route('/:id').get(EstadoCivilController.get);

module.exports = router;
