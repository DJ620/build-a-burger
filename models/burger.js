// Requiring the orm to use inside the burger model functions
const orm = require("../config/orm.js");

// The burger model is a set of functions used to manipulate data in the burgers table of the database
const burger = {
    // Selects all data from the burgers table
    all: function(cb) {
        orm.selectAll("burgers", res => {
            cb(res);
        });
    },
    // Adds data to the burgers table
    insert: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, res => {
            cb(res);
        });
    },
    // Updates data from the burgers table
    update: function(vals, condition, cb) {
        orm.updateOne("burgers", vals, condition, res => {
            cb(res);
        });
    }
};

// Exporting the burger model to be used in the API routes
module.exports = burger;