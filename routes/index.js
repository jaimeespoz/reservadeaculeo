const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/contacto', (req, res) => {
    res.render('contacto.html');
});

router.get('/login', (req, res) => {
    res.render('login.html');
});

router.get('/quienes_somos', (req, res) => {
    res.render('index.html');
});

router.get('/enconstruccion', (req, res) => {
    res.render('src/enconstruccion.html');
});

module.exports = router;
