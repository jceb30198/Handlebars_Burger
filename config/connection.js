const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burger_db"
});

connection.connect((err) => {
    if (err) {
        console.error(`Error connecting: ${err.stack}`);
        return;
    };
    console.log(`Connection as id ${connection.threadId}`);
});

module.exports = connection;