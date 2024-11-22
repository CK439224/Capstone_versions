// routes/animals.js
const express = require('express');
const router = express.Router();
const RescueAnimal = require('../models/RescueAnimal');

// Get all animals
router.get('/', async (req, res) => {
    const animals = await RescueAnimal.find();
    res.json(animals);
});

// routes/animals.js
router.get('/:id', async (req, res) => {
    try {
        const animal = await RescueAnimal.findById(req.params.id);
        if (!animal) {
            return res.status(404).json({ message: 'Animal not found' });
        }
        res.json(animal);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching animal' });
    }
});


// Add a new animal
router.post('/', async (req, res) => {
    try {
        const animalData = req.body;

        // Log the incoming data for debugging
        console.log('Incoming animal data:', animalData);

        const animal = new RescueAnimal(animalData);
        await animal.save();
        res.status(201).json(animal);
    } catch (error) {
        console.error('Error adding new animal:', error);
        res.status(500).json({ message: 'Error adding new animal' });
    }
});






// Update an animal
router.put('/:id', async (req, res) => {
    try {
        const updateData = {};

        // Loop over fields and set them in updateData only if they exist in req.body
        for (const [key, value] of Object.entries(req.body)) {
            if (value !== undefined) {
                updateData[key] = value;
            }
        }

        const animal = await RescueAnimal.findByIdAndUpdate(
            req.params.id,
            { $set: updateData }, // Use $set to update fields that may have been initially undefined
            { new: true, runValidators: true } // Ensure validation and return updated document
        );

        if (!animal) {
            return res.status(404).json({ message: 'Animal not found' });
        }
        
        res.json(animal);
    } catch (error) {
        console.error("Error updating animal:", error);
        res.status(500).json({ message: 'Error updating animal' });
    }
});





// Delete an animal
router.delete('/:id', async (req, res) => {
    await RescueAnimal.findByIdAndDelete(req.params.id);
    res.json({ message: 'Animal deleted' });
});

module.exports = router;
