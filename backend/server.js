// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/rescue_animals')
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log('Database connection error:', error));

const animalRoutes = require('./routes/animals');
app.use('/api/animals', animalRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
