'use strict';
let Models = require('../models'); //matches index.js

const getRelationships = (res) => {
  //finds all users
  Models.Relationship.findAll({
    where: { employerId: 2 },
    include: [
      { model: Models.User, as: 'Employer' },
      { model: Models.User, as: 'Employee' },
    ],
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createRelationship = (data, res) => {
  // data.created_at = new Date();
  // data.updated_at = new Date();
  //creates a new user using JSON data POSTed in request body
  console.log('data', data);
  new Models.Relationship(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
module.exports = {
  createRelationship,
  getRelationships,
};
