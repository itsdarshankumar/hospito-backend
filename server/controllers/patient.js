const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

exports.patient = async (req, res) => {
  res.status(200).send(`Hello ${req.user.name}`);
};
