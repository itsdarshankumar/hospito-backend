const express = require("express");
const router = express.Router();

const searchController = require("../controllers/search");
const verifyToken = require("../utils/verifyToken");

router.get("/", verifyToken.verifyToken, searchController.search);

module.exports = router;
