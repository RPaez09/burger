const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DBHost,
    user: process.env.DBUser,
    password: process.env.DBPASS,
    database: 'burgers_db'
});

connection.connect( err => {
    if( err ) { 
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`Connected to mysql, ID: ${connection.threadId}`);
});

module.exports = connection;