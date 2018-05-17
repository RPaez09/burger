const ORM = require('../config/orm');

const burger = {
    getAll: cb => {
        ORM.getAll('burgers', res => { cb(res); });
    },

    createBurger: (name, cb) => {
        ORM.create('burgers', ['name'], [name], cb);
    },

    updateBurger: (id, cb) => {
        let condition = `id=${id}`;

        ORM.update('burgers', { devoured: true }, condition, cb);
    }
};

module.exports = burger;