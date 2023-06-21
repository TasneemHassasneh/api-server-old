"use strict";
// importing the required dependencies.
const express = require("express");
const cors = require("cors");
const app = express();
const pg = require("pg"); // Require the Postgres
const client = new pg.Client(process.env.DBURL);
const pageNotFound = require('./error-handlers/404');
const serverError = require('./error-handlers/500');
const clothesRouter = require('./routes/clothes');
const foodRouter = require('./routes/food');
const ingredientsRouter = require('./routes/Ingredient');

// Using Libraries inside express.
app.use(express());
app.use(cors());
app.use(express.json());



// defining route of Home
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// using Router
app.use(clothesRouter);
app.use(foodRouter);
app.use(ingredientsRouter);

// using error handlers
app.use( pageNotFound);
app.use(serverError);

// start listening to the server.
function start(port) {
  client.connect((err, client, done) => {
    if (err) {
      console.error("Error connecting to the database", err);
      return;
    }
    console.log("Connected to the database");
  });
  app.listen(port, () => console.log(`Up and running on port ${port}`));
}

//exporing functionalities objects.
module.exports = {
  start,
  app,
};
