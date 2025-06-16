const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String }
});

module.exports = mongoose.model('Skill', SkillSchema);
