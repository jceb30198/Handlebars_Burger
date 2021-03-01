const orm = require("../config/orm");

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(results) {
            cb(results);
        })
    },
    insert: function(burgerVal, cb) {
        orm.insertOne("burgers", burgerVal, function(results) {
            cb(results);
        })
    },
    update: function(id, cb) {
        orm.updateOne("burgers", id, function(results) {
            cb(results);
        })
    }
}

module.exports = burger;