const db = require("../models");

// Defining methods for the budgetsControllers
module.exports = {
  createbudget: function(req, res) {
    db.Budget
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getbudget: function(req, res) {
    db.Budget
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getuserbudget: function(req, res) {
    db.Budget
      .find({
        username: req.params.username,
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getonebudget: function(req, res) {
    db.Budget
      .findOne({
        username: req.params.username,
        month: req.params.month,
        year: req.params.year
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Budget
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updatebudget: function(req, res) {
    // console.log('from front')
    // console.log(req.body)
    db.Budget
      .replaceOne({ _id: req.params.id }, req.body)
      .then(dbModel => {
        // console.log('from back')
        // console.log(dbModel)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
};
