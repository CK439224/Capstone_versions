const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path'); // Import path module
const favicon = require('serve-favicon'); // Import serve-favicon

const app = express();

// Set Content-Security-Policy
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'none'"],
            imgSrc: ["'self'", "http://localhost:3000"],
            scriptSrc: ["'self'"],
            styleSrc: ["'self'"],
            connectSrc: ["'self'", "http://localhost:3000"],
        },
    },
}));

app.use(cors());
app.use(bodyParser.json());


// Serve favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/rescue_animals')
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log('Database connection error:', error));

// API routes
const animalRoutes = require('./routes/animals');
app.use('/api/animals', animalRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Rescue Animal App</h1>');
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
