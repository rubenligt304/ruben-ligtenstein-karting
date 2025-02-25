const mongoose = require('mongoose');

const raceResultSchema = new mongoose.Schema({
    date: Date,
    event: String,
    position: Number
});

module.exports = mongoose.model('RaceResult', raceResultSchema);
