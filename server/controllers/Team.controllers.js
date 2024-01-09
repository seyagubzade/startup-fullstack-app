const { TeamStartup } = require("../models/Team.model");

const TeamStartupControllers = {
  getAll: async (req, res) => {
    try {
      const data = await TeamStartup.find({});
      res.status(200).send(data);
    } catch (err) {
      res.send(err).status(404);
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await TeamStartup.findById(id);
      res.status(200).send(data);
    } catch (err) {
      res.send(err).status(404);
    }
  },
  add: async (req, res) => {
    try {
      const { title, name, photo, about } = req.body;
      const newTeamMember = new TeamStartup({title, name, photo, about});
      await newTeamMember.save();
      res.status(200).send(newTeamMember);
    } catch (err) {
      res.send(err).status(404);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await TeamStartup.findByIdAndDelete(id);
      const data = await TeamStartup.find({})
      res.status(200).send(data);
    } catch (err) {
      res.send(err).status(404);
    }
  },
};


module.exports = {TeamStartupControllers}