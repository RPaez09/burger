const express   = require('express');
const burger    = require('../models/burger');

const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/burgers');
});

router.get('/burgers', (req,res) => {
    burger.getAll( burgers => {
        res.render('index', { burgers: burgers });
    });
});

router.post('/burgers', (req,res) => {
    burger.createBurger(req.body.name, newBurger => {
        console.log(`New Burger created: ${newBurger}`);

        res.redirect('/');
    });
});

router.put('/burgers/:id', (req,res) => {
    burger.updateBurger(req.params.id, newBurger => {
        console.log(`Burger Updated: ${newBurger}`);

        res.sendStatus(200);
    });
});

module.exports = router;