// models/RescueAnimal.js
const mongoose = require('mongoose');

const rescueAnimalSchema = new mongoose.Schema({
    name: String,
    type: String,
    gender: String,
    age: Number,
    weight: Number,
    acquisitionDate: Date,
    acquisitionCountry: String,
    trainingStatus: String,
    reserved: Boolean,
    inServiceCountry: String,
    adoptionStatus: String
});

module.exports = mongoose.model('RescueAnimal', rescueAnimalSchema);
