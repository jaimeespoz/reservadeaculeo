const express = require('express');
const router = express.Router();

const CondominiosController = require('../controllers/CondominiosController');

router
    .route('')
    .get(CondominiosController.getAll)
    .post(CondominiosController.add)
    .put(CondominiosController.update)
    .delete(CondominiosController.del);

router.route('/:id').get(CondominiosController.get);

module.exports = router;
