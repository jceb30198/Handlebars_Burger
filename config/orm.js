const connection = require("./connection");

const orm = {
    selectAll: (tableName, cb) => {
        let query = `SELECT * FROM ${tableName}`;

        connection.query(query, [tableName], (err, result) => {
            if(err) throw err;
            cb(result);
        })
    },
    insertOne: (tableName, burgerName, cb) => {
        let query = `INSERT INTO ${tableName} (burger_name) VALUES ("${burgerName}")`;

        connection.query(query, [tableName, burgerName], (err, result) => {
            if(err) throw err;
            cb(result);
        })
    },
    updateOne: (tableName, burgerId, cb) => {
        let query = `UPDATE ${tableName} SET devoured = 1 WHERE id = ${burgerId}`;

        connection.query(query, [tableName, burgerId], (err, result) => {
            if(err) throw err;
            cb(result);
        })
    }
};

module.exports = orm;