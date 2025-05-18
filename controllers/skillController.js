const Skill = require('../models/Skill');

// Get all skills
exports.getAllSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
        res.status(200).json(skills);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single skill
exports.getSkillById = async (req, res) => {
    try {
        const skill = await Skill.findById(req.params.id);
        if (!skill) {
            return res.status(404).json({ message: 'Skill not found' });
        }
        res.status(200).json(skill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new skill
exports.createSkill = async (req, res) => {
    //  Meerab Afzal's Skills Data
    const skillsData = [
        { name: 'C++', percentage: 90 },
        { name: 'Unity', percentage: 80 },
        { name: 'HTML/CSS', percentage: 95 },
        { name: 'SQL', percentage: 80 },
        { name: 'Python', percentage: 75 },
        { name: 'JavaScript', percentage: 80 }
    ];

    try {
        //  First, delete existing skills to avoid duplicates (optional, but useful for updates)
        await Skill.deleteMany({});

        //  Then, create the new skills
        const savedSkills = await Skill.insertMany(skillsData);
        res.status(201).json(savedSkills);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a skill
exports.updateSkill = async (req, res) => {
    try {
        const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSkill) {
            return res.status(404).json({ message: 'Skill not found' });
        }
        res.status(200).json(updatedSkill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a skill
exports.deleteSkill = async (req, res) => {
    try {
        const deletedSkill = await Skill.findByIdAndDelete(req.params.id);
        if (!deletedSkill) {
            return res.status(404).json({ message: 'Skill not found' });
        }
        res.status(200).json({ message: 'Skill deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = exports;