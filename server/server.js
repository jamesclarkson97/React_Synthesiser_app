const express = require("express");
const cors = require("cors");
const parser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router");

// Create server and set it to use cors and body-parser
const app = express();
app.use(cors());
app.use(parser.json());

// Set up database connection and routers
MongoClient.connect("mongodb://localhost:27017")
  .then(client => {
    const db = client.db("step_sequencer");
    const sequencesCollection = db.collection("sequences");
    const sequencesRouter = createRouter(sequencesCollection);
    app.use("/api/sequences", sequencesRouter);
  })
  .catch(console.error);

// Set up listener for requests from Client
app.listen(3001, function () {
  console.log(`Listening on port ${ this.address().port }`);
});