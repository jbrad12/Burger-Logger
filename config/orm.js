var connection = require("./connection.js");

var orm = {

    selectAll: function(table) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            console.table(result);
    });
    },

    insertOne: function(table, col1, col2, val1, val2) {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?,?)";
        connection.query(queryString, [table, col1, col2, val1, val2], function(err, result) {
            if (err) throw err;
            console.table(result);
    });
    }

}



module.exports = orm;