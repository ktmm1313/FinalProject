// define the port
// Use Heroku's PORT or default to 3000.
const port = process.env.PORT || 3000;

// require the Express module
const express = require("express");

// creates an instance of an Express server
const app = express();

//allows us to use query strings params,
//paths params, and body all in the request object
app.use(express.json());

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
  