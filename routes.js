const express = require('express');
const routes = express.Router();
const pool = require('./connection');

// Logs all rows from test table in Heroku database
routes.get('/testData', (req, res) => {
pool.query('SELECT * FROM test').then(results => {
        res.json(results.rows);
        console.log(results.rows);
    });
});


// export module so it's usable in other files
module.exports = routes;