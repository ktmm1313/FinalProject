const express = require('express');
const routes = express.Router();
const pool = require('./connection');

//Logs all rows from test table in Heroku database
routes.get('/', (req, res) => {
if (req.query.keyword) {
pool.query('SELECT * FROM characters WHERE name LIKE $1', [req.query.keyword]).then((results) => {
        res.json(results.rows);
        console.log(results.rows);
    } );
}
});




// export module so it's usable in other files
module.exports = routes;