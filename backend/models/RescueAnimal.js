// models/RescueAnimal.js
const mongoose = require('mongoose');

const RescueAnimalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    weight: { type: Number, required: true },
    acquisitionDate: { type: Date, required: true },
    acquisitionCountry: { type: String, required: true },
    trainingStatus: { type: String, required: true },
    reserved: { type: Boolean, required: true },
    inServiceCountry: { type: String, required: true },
    // Monkey-specific fields
    tailLength: { type: Number },
    height: { type: Number },
    bodyLength: { type: Number },
    species: { type: String },
});

module.exports = mongoose.model('RescueAnimal', RescueAnimalSchema);
