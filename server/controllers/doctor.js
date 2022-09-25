const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

exports.doctor = async (req, res) => {
  res.status(200).send("Hello Doctor");
};
