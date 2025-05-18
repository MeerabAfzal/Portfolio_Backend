const Experience = require('../models/Experience');

// Get all experiences
exports.getAllExperiences = async (req, res) => {
    try {
        const experiences = await Experience.find();
        res.status(200).json(experiences);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single experience
exports.getExperienceById = async (req, res) => {
    try {
        const experience = await Experience.findById(req.params.id);
        if (!experience) {
            return res.status(404).json({ message: 'Experience not found' });
        }
        res.status(200).json(experience);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new experience
exports.createExperience = async (req, res) => {
    // Meerab Afzal's Experience Data (from resume - assuming "INTERN" is a role)
    const experienceData = [
        {
            company: 'Various Personal Projects', // Since "INTERN" isn't a company
            position: 'Game Developer',
            duration: 'Ongoing', // Based on the projects listed
            description: 'Developed 2D and 3D games using Unity and C#, focusing on platformer, endless runner, and simulation genres. Implemented AI, combat mechanics, and various game systems. Published games on Itch.io.'
        },
        {
            company: 'Various Personal Projects',
            position: 'Web Developer',
            duration: 'Ongoing',
            description: 'Created responsive web applications using HTML, CSS, JavaScript, and React. Developed e-commerce platforms with features like authentication, product management, and AI chatbots, utilizing Firebase for hosting and backend services.'
        },
        {
            company: 'GDG (Google Developer Group)',
            position: 'Marketing Team Member',
            duration: 'Ongoing', // Assuming current involvement
            description: 'Contributed to the marketing efforts of the Google Developer Group.'
        },
        {
            company: 'GDG (Google Developer Group)',
            position: 'Event Management Team Member',
            duration: 'Ongoing', // Assuming current involvement
            description: 'Assisted in the planning and execution of events for the Google Developer Group.'
        }
        // You can add more specific internships or roles if you have them
    ];

    try {
        // Delete existing experience records
        await Experience.deleteMany({});

        // Create the new experience records
        const savedExperiences = await Experience.insertMany(experienceData);
        res.status(201).json(savedExperiences);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an experience
exports.updateExperience = async (req, res) => {
    try {
        const updatedExperience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedExperience) {
            return res.status(404).json({ message: 'Experience not found' });
        }
        res.status(200).json(updatedExperience);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an experience
exports.deleteExperience = async (req, res) => {
    try {
        const deletedExperience = await Experience.findByIdAndDelete(req.params.id);
        if (!deletedExperience) {
            return res.status(404).json({ message: 'Experience not found' });
        }
        res.status(200).json({ message: 'Experience deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = exports;