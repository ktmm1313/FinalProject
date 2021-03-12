const express = require('express');
const { getLineAndCharacterOfPosition } = require('typescript');
const routes = express.Router();
const pool = require('./connection');

//Logs all rows from test table in Heroku database
// routes.get('/charcters', (req, res) => {
// if (req.query.keyword) {
// pool.query('SELECT * FROM characters WHERE name LIKE $1', [req.query.keyword]).then((results) => {
//         res.json(results.rows);
//         console.log(results.rows);
//     } );
// }
// });

// routes.get('/', (req, res) => {
//     let gender = "male";
//  pool.query('SELECT * FROM characters WHERE gender = $1', [gender]).then((results) => {
//     pool.query('SELECT * FROM results WHERE points = 22')
//         res.json(results.rows);
//         console.log(results.rows);
//     });
// });

routes.get('/:points', (req, res) => {
 pool.query('SELECT marvelid FROM characters results WHERE points = $1', [req.params.points]).then((results) => {             
        res.json(results.rows);
        console.log(results.rows);
    });
});


// export module so it's usable in other files
module.exports = routes;