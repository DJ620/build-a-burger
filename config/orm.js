const connection = require("../config/connection.js");

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

const orm = {
    selectAll: function(table, cb) {
        let queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        let queryString = `INSERT INTO ${table} (${cols}) VALUES (?)`;
        connection.query(queryString, vals, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function(table, vals, condition, cb) {
        let queryString = `UPDATE ${table} SET ${objToSql(vals)} WHERE ${condition}`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;