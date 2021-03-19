const { Pool } = require('pg');try {
    // When not running via Heroku, this will load the .env file.
    require('dotenv').config();
} catch (e) {
    // When running with Heroku, dotenv doesn't need to be available.
}
const connectionString = process.env.DATABASE_URL;
const privateKey = process.env.PRIVATE_KEY; //STACEY
const pool = new Pool({
    connectionString: connectionString, //STACEY
    privateKey: privateKey, //STACEY
    ssl: connectionString.includes('localhost')
        ? false
        : { rejectUnauthorized: false },
});

module.exports = pool;