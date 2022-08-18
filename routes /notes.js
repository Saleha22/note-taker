// import express using a router class
const { Router } = require("express");
// import controller functions from api file

// MOVE THESE FUNCTIONS HERE LATER
//const { getNotes, deleteNotes, createNotes } = require("../controllers/notes");

// create a router instance
const router = Router();
//routers with middleware functions
router.get("/", (req, res) => {
  // add code later
});

router.delete("/:id", (req, res) => {});

router.post("/", (req, res) => {});
// export file
module.exports = router;
