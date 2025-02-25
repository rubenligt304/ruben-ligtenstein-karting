const express = require('express');
const router = express.Router();
const RaceResult = require('../models/raceResult');
const Sponsor = require('../models/sponsor');

// Fetch race results
router.get('/results', async (req, res) => {
    const results = await RaceResult.find();
    res.json(results);
});

// Handle sponsor contact form
router.post('/sponsor', async (req, res) => {
    const newSponsor = new Sponsor(req.body);
    await newSponsor.save();
    res.status(201).send('Sponsor contact saved.');
});

module.exports = router;
