const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userModel = require("../models/user");

exports.search = async (req, res) => {
  // Get user input
  const name = req.query.name;
  const role = req.query.role;
  // Validate user input
  if (!(name && role)) {
    res.status(400).send("All input is required");
  }
  const users = await userModel.fetchUserByName(name, role);
  if (users) {
    res.status(200).json({ users });
  } else {
    res.status(400).json({ message: "No result found" });
  }
};
