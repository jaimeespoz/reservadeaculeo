const express = require('express');
const router = express.Router();

const SectoresController = require('../controllers/SectoresController');

router
    .route('')
    .get(SectoresController.getAll)
    .post(SectoresController.add)
    .put(SectoresController.update)
    .delete(SectoresController.del);

router.route('/:id').get(SectoresController.get);

module.exports = router;
