const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  Data: Array

});

const ProjectModel = mongoose.model("project", projectSchema);

module.exports = ProjectModel;
