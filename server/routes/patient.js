const express = require("express");
const router = express.Router();

const patientController = require("../controllers/patient");
const verifyToken = require("../utils/verifyToken");
const verifyPatient = require("../utils/verifyPatient");
router.get("/", verifyPatient.verifyPatient, patientController.patient);

module.exports = router;
