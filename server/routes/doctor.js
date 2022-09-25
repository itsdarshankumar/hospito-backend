const express = require("express");
const router = express.Router();

const doctorController = require("../controllers/doctor");
const verifyToken = require("../utils/verifyToken");
const verifyDoctor = require("../utils/verifyDoctor");

router.get(
  "/",
  verifyToken.verifyToken,
  verifyDoctor.verifyDoctor,
  doctorController.doctor
);

module.exports = router;
