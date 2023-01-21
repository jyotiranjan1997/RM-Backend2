const express = require("express");
const { User } = require("../models/userModel");
const userRoute = express.Router();
const jwt = require("jsonwebtoken");
const {
  authMiddleWare,
  authLoginMiddleWare,
  authValidator,
} = require("../middleWares/authMiddleware");
const privateKey = process.env.secret_key;

// For Sign-up Router

userRoute.post("/signup", authMiddleWare, async (req, res) => {
  const { name, email, password } = req.body;
  let date = new Date();
  let Time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  try {
    await User.create({ name, email, password, Time });
    res.status(200).send({ msg: "signing up successfully !" });
  } catch (err) {
    res.status(500).send({ msg: "Signup failed !" });
  }
});

// For Login Router

userRoute.post("/login", authLoginMiddleWare, async (req, res) => {
  const { user } = req.body;

  try {
    jwt.sign({ user }, privateKey, function (err, token) {
      if (err) {
        res.status(500).send({ msg: "Login failed !" });
      }
      if (token) {
        res.status(200).send({ msg: "Login Successful", token });
      }
    });
  } catch (err) {
    res.status(500).send({ msg: "Login failed !" });
  }
});

userRoute.get("/", authValidator, async (req, res) => {
  const { user } = req.body;
  try {
    res.send({ msg: "user Data", user: user });
  } catch (err) {
    res.status(500).send({ msg: "Login failed !" });
  }
});
module.exports = { userRoute };
