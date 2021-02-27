const connection = require("./connection");

const orm = {
    selectAll: (tableName, cb) => {
        let query = "SELECT * FROM ?";

        connection.query(query, [tableName], (err, result) => {
            if(err) throw err;
            cb(result);
        })
    },
    insertOne: (tableName, burgerName, burgerVal) => {
        let query = "INSERT INTO ? (?) VALUES ?"

        connection.query(query, [tableName, burgerName, burgerVal], (err, result) => {
            if(err) throw err;
            cb(result);
        })
    },
    updateOne: () => {
        let query = ""
    }
}

module.exports = orm;