const db = require("../models");

// Defining methods for the booksController
module.exports = {
  publicKey: require('./publicKey'),
  getAccessToken: require('./getAccessToken'),
  transactions: require('./transactions'),
  authAPI: require('./authAPI'),
  updateUser: require('./updateUser'),
  mail: require('./mail')
};
