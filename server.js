// external imports
const express = require("express");
const path = require("path");
// internal imports
const routes = require("./routes ");
// create express instance for app
const app = express();
// declare port
const PORT = process.env.PORT || 4000;
// middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./dist")));
app.use(routes);
// listen to requests
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
