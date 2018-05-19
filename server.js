const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger('dev'));
// configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// set up logger
app.use(logger('combined'))
// serve up static assets
app.use(express.static(path.join(__dirname, "client/build")));
// set up routes
//app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
