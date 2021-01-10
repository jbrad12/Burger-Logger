var connection = require("./connection.js");

var orm = {

    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            cb(result) 
    });
    },

    insertOne: function( col1, col2, val1, val2) {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?,?)";
        connection.query(queryString, ["burgers", col1, col2, val1, val2], function(err, result) {
            if (err) throw err;
          
    });
    },

    update: function(id, cb) {
        var queryString = "UPDATE burgers";
        // devoured = 1 WHERE id = ?
        queryString += " SET ";
        queryString += "devoured = 1";
        queryString += " WHERE id = ";
        queryString += id;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    }

}



module.exports = orm;