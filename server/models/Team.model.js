const mongoose = require("mongoose");

const TeamStartup = mongoose.model(
  "TeamStartup",
  new mongoose.Schema({
    title: String,
    name: String,
    photo: String,
    about: String
  })
);

module.exports = {TeamStartup}