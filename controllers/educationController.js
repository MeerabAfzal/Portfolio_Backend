const Education = require('../models/Education');

// Get all education records
exports.getAllEducation = async (req, res) => {
    try {
        const education = await Education.find();
        res.status(200).json(education);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single education record
exports.getEducationById = async (req, res) => {
    try {
        const education = await Education.findById(req.params.id);
        if (!education) {
            return res.status(404).json({ message: 'Education record not found' });
        }
        res.status(200).json(education);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new education record
exports.createEducation = async (req, res) => {
    // Meerab Afzal's Education Data
    const educationData = [
        {
            institution: 'Sialkot Grammer School',
            degree: 'Matriculation',
            duration: '2020',
            description: 'Matriculation from Sialkot Grammer School' // Added a description
        },
        {
            institution: 'Aspire College for Women',
            degree: 'Intermediate',
            duration: '2021–2022',
            description: 'Intermediate from Aspire College for Women' // Added a description
        },
        {
            institution: 'Information Technology University',
            degree: 'Bachelor in CS',
            duration: '2023–2027',
            description: 'Bachelor of Science in Computer Science at ITU' // Added a description
        }
    ];

    try {
        //  Delete existing education records
        await Education.deleteMany({});

        //  Create the new education records
        const savedEducation = await Education.insertMany(educationData);
        res.status(201).json(savedEducation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an education record
exports.updateEducation = async (req, res) => {
    try {
        const updatedEducation = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEducation) {
            return res.status(404).json({ message: 'Education record not found' });
        }
        res.status(200).json(updatedEducation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an education record
exports.deleteEducation = async (req, res) => {
    try {
        const deletedEducation = await Education.findByIdAndDelete(req.params.id);
        if (!deletedEducation) {
            return res.status(404).json({ message: 'Education record not found' });
        }
        res.status(200).json({ message: 'Education record deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = exports;