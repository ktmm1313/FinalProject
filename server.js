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

// // adding output path
// app.use(express.static(./ + "/public"));

// run the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));
const routes = require('./routes.js');
app.use('/', routes);


app.get("/test", (req, res) => {
    res.json("Woo hoo!");
  });
  
app.get("/", (req, res) => {
    res.send("Welcome to our quiz");
  });
  