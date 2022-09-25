const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userModel = require("../models/user");

exports.login = async (req, res) => {
  // Get user input
  const { email, password } = req.body;

  // Validate user input
  if (!(email && password)) {
    res.status(400).send("All input is required");
  }
  // Validate if user exist in our database
  const user = await userModel.fetchUserByEmail(email);
  if (user && (await bcrypt.compare(password, user.password))) {
    // Create token
    const token = await jwt.sign(
      { email: user.email, role: user.role, name: user.name },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    res.status(200).json({ token: token, userData: user });
  } else {
    res.status(400).send("Invalid Credentials");
  }
};
