const connection = require("./connection");

const orm = {
    selectAll: (tableName, cb) => {
        let query = "SELECT * FROM ?";

        connection.query(query, [tableName], (err, result) => {
            if(err) throw err;
            cb(result);
        })
    },
    insertOne: (tableName, burgerName, burgerVal, cb) => {
        let query = "INSERT INTO ? (?) VALUES ?";

        connection.query(query, [tableName, burgerName, burgerVal], (err, result) => {
            if(err) throw err;
            cb(result);
        })
    },
    updateOne: (tableName, burgerId, cb) => {
        let query = "UPDATE ? SET devoured = true WHERE id = ?";

        connection.query(query, [tableName, burgerId], (err, result) => {
            if(err) throw err;
            cb(result);
        })
    }
};

module.exports = orm;