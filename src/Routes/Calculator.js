const express = require("express");
const { authValidator } = require("../middleWares/authMiddleware");
const calculatorRoute = express.Router();
const { Calcultor } = require("../models/calculatorModel");

calculatorRoute.get("/", authValidator, async (req, res) => {
  const { amount, interest, year } = req.body;

  try {
    const F =Math.floor( amount * (((1 + interest / 100) ** year - 1) / (interest / 100)));
    let Total_invest = Math.floor(amount * year);
    let Intrest_gained = F - Total_invest;
    
    res.send({ msg: "Your calculated Data", Total_maturity: F ,Total_invest,Intrest_gained});
  } catch (err) {
    res.status(500).send({ msg: "Failed to send severity" });
  }
});

module.exports = { calculatorRoute };
