const { Pool } = require('pg');try {
    // When not running via Heroku, this will load the .env file.
    require('dotenv').config();
} catch (e) {
    // When running with Heroku, dotenv doesn't need to be available.
}
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
    connectionString: connectionString,
    ssl: connectionString.includes('localhost')
        ? false
        : { rejectUnauthorized: false },
});// Code snippet from Heroku that might be useful but
// doesn't seem to be required
// pool.connect();
// pool.query('SELECT * FROM test;', (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   pool.end();
// });
module.exports = pool;