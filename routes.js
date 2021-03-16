const express = require('express');
const { getLineAndCharacterOfPosition } = require('typescript');
const routes = express.Router();
const pool = require('./connection');

routes.get('/:points', (req, res) => {
 pool.query('SELECT * FROM characters results WHERE points = $1', [req.params.points]).then((results) => {    
       
        res.json(results.rows);
        console.log(results.rows);
    });
});

// export module so it's usable in other files
module.exports = routes;