const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", res => {
            cb(res);
        });
    },
    insert: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, res => {
            cb(res);
        });
    },
    update: function(vals, condition, cb) {
        orm.updateOne("burgers", vals, condition, res => {
            cb(res);
        });
    }
};

module.exports = burger;