const express = require('express');
const routes = express.Router();

const pool = require('./connection');







// export module so it's usable in other files
module.exports = routes;