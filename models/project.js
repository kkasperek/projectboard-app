const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectName: { type: String, required: true },
  notes: { type: String, required: true },
  inProgress: Boolean,
  complete: Boolean,
  date: { type: Date, default: Date.now }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
