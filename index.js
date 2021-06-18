const express = require("express");
const port = 8000;
const mongoose = require("mongoose");
const app = express();

// Db config
const db = require("./config/mongoose").MongoURI;

// connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server:${err}`);
  }
  console.log(`Server started on port ${port}`);
});
