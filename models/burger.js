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
    update: function(burgerId, cb) {
        orm.updateOne("burgers", burgerId, function(results) {
            cb(results);
        })
    }
}

module.exports = burger;