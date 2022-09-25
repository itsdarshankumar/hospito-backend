const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");
const verifyToken = require("../utils/verifyToken");
const verifyAdmin = require("../utils/verifyAdmin");

router.get(
  "/",
  verifyToken.verifyToken,
  verifyAdmin.verifyAdmin,
  adminController.admin
);

module.exports = router;
