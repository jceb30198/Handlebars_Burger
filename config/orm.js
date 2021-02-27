const connection = require("./connection");

const orm = {
    selectAll: (tableName, cb) => {
        let query = "SELECT * FROM ?";

        connection.query(query, [tableName], (err, result) => {
            if(err) throw err;
            cb(result);
        })
    },
    insertOne: () => {
        let query = ""
    },
    updateOne: () => {

    }
}

module.exports = orm;