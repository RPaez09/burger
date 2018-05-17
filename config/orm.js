const connection = require('./connection');

printQuestionMarks = count => {
    let arr = [];

    for( let i = 0; i < count; i++ ){
        arr.push("?");
    }

    return arr.join('');
};

objToSql = target => {
    let arr = [];

    for(let key in target){
        arr.push(`${key} = ${target[key]}`);
    }

    return arr.join('');
};

const ORM = {
    getAll: (table, cb) => {
        let query = `SELECT * FROM ${table};`;

        connection.query( query, (err, result) => {
            if(err) {throw err;}
            cb(result);
        });
    },

    create: (table, columns, values, cb) => {
        let query = `INSERT INTO ${table} (${columns.toString()}) VALUES (${printQuestionMarks(values.length)})`;

        connection.query( query, values, (err, result) => {
            if(err) {throw err;}
            cb(result);
        });
    },

    update: (table, values, condition, cb) => {
        const query = `UPDATE ${table} SET ${objToSql(values)} WHERE ${condition}`;

        connection.query( query, (err, result) => {
            if(err) {throw err;}
            cb(result);
        });
    }
};

module.exports = ORM;