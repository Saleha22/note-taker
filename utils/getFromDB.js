const fs = require("fs");
const path = require("path");

const writeToFile = (data) => {
  // write the data from params to the file
  try {
    // create path to write to notes file
    const filePath = path.join(__dirname, `../db/db.json`);
    // write data to file
    fs.writeFileSync(filePath, JSON.stringify(data));
    // display an error message if unable to write file
  } catch (error) {
    console.log(`[ERROR: Failed to write data from file | ${error.message}]`);
  }
};

const getNotes = () => {
  const filePath = path.join(__dirname, "../db/db.json");
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

const deleteNotes = (id) => {
  // use the id from the param to delete it

  // get notes from file
  const notesData = readDataFromFile();
  // filter array and remove note from array
  const filteredNotes = notesData.filter((note) => note.id !== id);
  // write back to data file
  writeDataToFile(filteredNotes);
  // return response
  return res.json(notesData);
};

const createNotes = (note) => {
  // get data from db.json
  let notes = getNotes();

  // push new object
  notes.push(note);

  // save the array back to db.json
  writeToFile(notes);

  // return new object
  return notes;
};

module.exports = {
  getNotes,
  createNotes,
  deleteNotes,
};
