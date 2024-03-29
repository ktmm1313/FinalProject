const express = require('express');
const routes = express.Router();
const pool = require('./connection');

routes.get('/:gender/:points', (req, res) => { 
pool.query('SELECT * FROM characters results WHERE gender = $1 AND points = $2', [req.params.gender, req.params.points]).then((results) => {    
        res.json(results.rows);
        console.log(results.rows);
    });
});

routes.get('/:altid', (req, res) => { 
    pool.query('SELECT * FROM characters results WHERE marvelid = $1', [req.params.altid]).then((results) => {    
            res.json(results.rows);
            console.log(results.rows);
        });
    });

// export module so it's usable in other files
module.exports = routes;