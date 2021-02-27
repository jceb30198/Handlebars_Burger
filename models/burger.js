const orm = require("../config/orm");

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(results) {
            cb(results);
        })
    },
    insert: function(nameCol, value, cb) {
        orm.insertOne("burgers", nameCol, value, function(results) {
            cb(resuls);
        })
    },
    update: function(burgerId, cb) {
        orm.updateOne("burgers", burgerId, function(results) {
            cb(results);
        })
    }
}   