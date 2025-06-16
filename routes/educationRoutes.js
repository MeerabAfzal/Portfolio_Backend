const express = require('express');
const router = express.Router();
const educationController = require('../controllers/educationController');

// Route to get all education records
router.get('/', educationController.getAllEducation);

// Route to get a single education record by ID
router.get('/:id', educationController.getEducationById);

// Route to create new education records
router.post('/', educationController.createEducation);

// Route to update an education record
router.put('/:id', educationController.updateEducation);

// Route to delete an education record
router.delete('/:id', educationController.deleteEducation);

module.exports = router;
