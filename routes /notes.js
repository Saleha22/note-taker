// import express using a router class
const { Router } = require("express");
const { getNotes, deleteNotes, createNotes } = require("../utils/getFromDB");
const { v4: uuidv4 } = require("uuid");
// import controller functions from api file

// MOVE THESE FUNCTIONS HERE LATER
//const { getNotes, deleteNotes, createNotes } = require("../controllers/notes");

// create a router instance
const router = Router();
//routers with middleware functions
router.get("/", (req, res) => {
  const notes = getNotes();
  res.json(notes);
});

router.delete("/:id", (req, res) => {
  const id = req.body.id;
  deleteNotes(id);

  return res.json({ status: success });
});

router.post("/", (req, res) => {
  const id = uuidv4();

  const note = {
    id: id,
    title: req.body.title,
    text: req.body.text,
  };

  createNotes(note);

  return res.json(note);
});

// export file
module.exports = router;
