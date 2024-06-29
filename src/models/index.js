'use strict';
const User = require('./user'); //require the model
const Relationship = require('./relationship'); //require the model
async function init() {
  await User.sync(); //sync the model
  await Relationship.sync();
}
init();
module.exports = {
  User, //export the model
  Relationship,
};
