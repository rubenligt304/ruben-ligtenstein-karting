const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    name: String,
    bio: String,
    achievements: [String]
});

module.exports = mongoose.model('Driver', driverSchema);
