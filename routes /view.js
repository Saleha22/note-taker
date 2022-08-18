// import express using a router class
const { Router } = require("express");
const path = require("path");
// import controller functions from view file

// create a router instance
const router = Router();
//routers with middleware functions
router.get("/notes", (req, res) => {
  // render notes page
  const file = path.join(__dirname, "../dist/notes.html");
  return res.sendFile(file);
});
router.get("/*", (req, res) => {
  // render home page
  const file = path.join(__dirname, "../dist/index.html");
  return res.sendFile(file);
});
// export file
module.exports = router;
