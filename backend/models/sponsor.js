const mongoose = require('mongoose');

const sponsorSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

module.exports = mongoose.model('Sponsor', sponsorSchema);
