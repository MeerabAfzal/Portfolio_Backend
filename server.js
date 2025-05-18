const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const educationRoutes = require('./routes/educationRoutes');
const skillRoutes = require('./routes/skillRoutes');
const experienceRoutes = require('./routes/experienceRoutes');
const projectRoutes = require('./routes/projectRoutes');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use routes with proper paths
app.use('/api/education', educationRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/projects', projectRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
