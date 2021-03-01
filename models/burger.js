const orm = require("../config/orm");

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(results) {
            cb(results);
        })
    },
    insert: function(nameCol, cb) {
        orm.insertOne("burgers", nameCol, function(results) {
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