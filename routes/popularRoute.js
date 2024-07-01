const express = require("express");
const getPopulars = require("../controllers/popularController");

const router = express.Router();

router.get("/",getPopulars);

module.exports = router;