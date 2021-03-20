// define the port
// Use Heroku's PORT or default to 3000.
const port = process.env.PORT || 3000;

// require the Express module
const express = require("express");

// creates an instance of an Express server
const app = express();

// creates the connection for the cors module to bring it all together
const cors = require("cors");

//allows us to use query strings params,
//paths params, and body all in the request object
app.use(express.json());

// require and use the cors module
app.use(cors());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://inner-superhero.herokuapp.com"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(); });

// Add express static here in order to
// run the angular app from folder called public
// app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/dist/FinalProject/browser"));

// // adding output path
// app.use(express.static(./ + "/public"));

// run the server
app.listen(port, () => {
  console.log(`Listening on port: ${port}.`)});

const routes = require('./routes.js');

app.options('*', cors()); // TRYING SOMETHING

app.use('/', routes);
  
// app.get("/", (req, res) => {
//     res.send("Welcome to our quiz");
//   });