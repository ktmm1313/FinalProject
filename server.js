// require the Express module
const express = require("express");

// creates an instance of an Express server
const app = express();

//allows us to use query strings params,
//paths params, and body all in the request object
app.use(express.json());

// define the port
// const port = 3000;

// define the port
// Use Heroku's PORT or default to 3000.
const port = process.env.PORT || 3000;
// run the server
app.listen(port, () => console.log(`Listening on
port: ${port}.`));

const routes = require('./routes.js');
app.use('/', routes);
// run the server
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/healthCheck", (req, res) => {
    res.json("Healthcheck endpoint is working.");
  });
  
  app.get("/", (req, res) => {
    res.send("Welcome to our quiz");
  });
  