const express = require("express");
const { authValidator } = require("../middleWares/authMiddleware");
const calculatorRoute = express.Router();
const { Calcultor } = require("../models/calculatorModel");

calculatorRoute.post("/", authValidator, async (req, res) => {
  const { user_id, name, value } = req.body;

  try {
    await Calcultor.create({ user_id, name, value });
    res.status(200).send({ msg: "severity Created Successfully!" });
  } catch (err) {
    res.status(500).send({ msg: "Failed to send severity" });
  }
});

calculatorRoute.get("/:name", authValidator, async (req, res) => {
  const { user_id } = req.body;
  const { name } = req.params;

  try {
    let severity = await Calcultor.find({ user_id, name });
    res.status(200).send({ msg: "severity Created Successfully!", severity });
  } catch (err) {
    res.status(500).send({ msg: "Failed to send severity" });
  }
});

module.exports = { calculatorRoute };
