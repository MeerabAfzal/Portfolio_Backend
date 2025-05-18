const Project = require('../models/Project');

// Get all projects
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single project
exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new project
exports.createProject = async (req, res) => {
    // Meerab Afzal's Project Data
    const projectData = [
        {
            title: "Fight Knight (Unity)",
            description: "A 3D combat-based game with AI-driven enemies and physics-based combat.",
            image: "assests/images/fight_knight.jpg",
            tags: ["Unity", "C#"],
            links: [
                { icon: "GitHubIcon", url: "#" }, //  String representation; you might need to adjust the model if you want to store complex objects
                { icon: "LaunchIcon", url: "#" }  //  String representation
            ]
        },
        {
            title: "Vim-Like Text Editor",
            description: "This command-line text editor replicates Vim's functionality, built using data structures like arrays, linked lists, and stacks.",
            image: "assests/images/txt.png",
            tags: ["C++", "Data Structures"],
            links: [
                { icon: "GitHubIcon", url: "#" } // String representation
            ]
        },
        {
            title: "Chess Game",
            description: "This Chess Game was developed as a Programming Fundamentals (PF) project, implementing key programming concepts such as loops, conditionals, functions, and object-oriented programming (OOP).",
            image: "assests/images/chess_ai.jpg",
            tags: ["C++", "OOP"],
            links: [
                { icon: "GitHubIcon", url: "#" } // String representation
            ]
        },
        {
            title: "H&M Apparel Store - E-Commerce & Meeting System",
            description: "E-commerce platform features secure authentication, real-time product management, and an Al-powered chatbot. With secure transactions and efficient order management, hosted on Firebase Hosting for scalability and security.",
            image: "assests/images/hm_apparel.jpg",
            tags: ["React.js", "Tailwind CSS", "Firebase"],
            links: [
                { icon: "GitHubIcon", url: "#" } // String representation
            ]
        }
    ];

    try {
        // Delete existing projects
        await Project.deleteMany({});

        // Create the new projects
        const savedProjects = await Project.insertMany(projectData);
        res.status(201).json(savedProjects);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a project
exports.updateProject = async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a project
exports.deleteProject = async (req, res) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);
        if (!deletedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json({ message: 'Project deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = exports;