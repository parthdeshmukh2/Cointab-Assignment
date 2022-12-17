const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  Data: Array
  // name: {
  //   title: String,
  //   first: String,
  //   last: String,
  // },
  // location: {
  //   street: {
  //     number: Number,
  //     name: String,
  //   },
  //   city: String,
  //   state: String,
  //   country: String,
  // },
  // email: String,
  // picture: {
  //   large: String,
  //   medium: String,
  //   thumbnail: String,
  // },
});

const ProjectModel = mongoose.model("project", projectSchema);

module.exports = ProjectModel;
