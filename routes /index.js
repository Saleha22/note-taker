// import express using a router class
const { Router } = require("express");
// import internal files
const view = require("./view");
const api = require("./api");
// create a router instance
const router = Router();
//create routers with middleware functions
router.use("/api", api);
router.use("/", view);
// export file
module.exports = router;
