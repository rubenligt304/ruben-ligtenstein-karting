const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('frontend'));

mongoose.connect('mongodb://localhost:27017/karting', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to the database"))
    .catch(err => console.log(err));

// Define routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Starting the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
