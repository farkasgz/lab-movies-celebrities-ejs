const Celebrity = require('../models/Celebrity.model');

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// all your routes here
router.get('/create', (req, res) => {
    res.render('celebrities/new-celebrity')
})

router.post('/create', async (req, res) => {
    const {body} = req;
    console.log(body);

    try {
        const newCeleb = await Celebrity.create({...body});
        res.redirect(`/celeb/celebrities`);
    } catch (error) {
        console.log(error);
        res.redirect('/celeb/create');
    }
})

router.get('/celebrities', async (req, res) => {
    try {
        const allCelebs = await Celebrity.find();
        res.render('celebrities/celebrities', { allCelebs });
    } catch (error) {
        console.log(error);
    }
})

module.exports = router