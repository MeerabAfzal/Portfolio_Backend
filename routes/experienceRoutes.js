const express = require('express');
const experienceController = require('../controllers/experienceController');
const router = express.Router();

router.get('/', experienceController.getAllExperiences);
router.get('/:id', experienceController.getExperienceById);
router.post('/', experienceController.createExperience);
router.put('/:id', experienceController.updateExperience);
router.delete('/:id', experienceController.deleteExperience);

module.exports = router;
