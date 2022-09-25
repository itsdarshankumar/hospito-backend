const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();
const mongoString = process.env.DATABASE_URI;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

const registerRoute = require("./server/routes/register");
const loginRoute = require("./server/routes/login");
const adminRoute = require("./server/routes/admin");
const doctorRoute = require("./server/routes/doctor");
const searchRoute = require("./server/routes/search");
const patientRoute = require("./server/routes/patient");

app.use("/register", registerRoute);
app.use("/", loginRoute);
app.use("/admin", adminRoute);
app.use("/doctor", doctorRoute);
app.use("/search", searchRoute);
app.use("/patient", patientRoute);

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
