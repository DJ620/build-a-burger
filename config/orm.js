// Requiring my connection to make connection.query's
const connection = require("../config/connection.js");

// Helper function that turns an object into an array
const objToSql = obj => {
    let arr = [];
    for (let key in obj) {
        let value = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = `'${value}'`;
            }
            arr.push(`${key} = ${value}`);
        };
    };
    return arr.toString();
};

// Holds all query functions for mysql
const orm = {
    // Selects all data from the table passed in
    selectAll: function(table, cb) {
        let queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    // Adds data to the table passed in
    insertOne: function(table, cols, vals, cb) {
        let queryString = `INSERT INTO ${table} (${cols}) VALUES (?)`;
        connection.query(queryString, vals, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    // Updates data from the table passed in
    updateOne: function(table, vals, condition, cb) {
        let queryString = `UPDATE ${table} SET ${objToSql(vals)} WHERE ${condition}`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    }
};

// Exporting the orm object to be used in my burger model
module.exports = orm;