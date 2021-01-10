// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  create: function( col1, col2, val1, val2, cb) {
    orm.insertOne( col1, col2, val1, val2, function(res) {
      cb(res);
    });
  },

  update: function(id, cb) {
    orm.update(id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller 
module.exports = burger;
