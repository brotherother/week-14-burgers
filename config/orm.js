var connection = require('../config/connection.js');

var orm = {
    select: function(whatToSelect, tableInput) {
        var queryString = 'SELECT ' + whatToSelect + ' FROM ' + tableInput;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    newBurger: function(tableInput, burger) {
        var queryString = 'INSERT INTO ' + tableInput + ' VALUES ' + burger;

        connection.query(queryString, [valOfCol], function(err, result) {
            console.log(result);
        });
    },
    devour: function(whatToSelect, burger) {
        var queryString = 'UPDATE ' + whatToSelect + ' SET devoured=TRUE WHERE burger_name=' + burger;
        console.log(queryString);

        connection.query(queryString, function(err, result) {
            console.log(result);
        });
    }
};

module.exports = orm;