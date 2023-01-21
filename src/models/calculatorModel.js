const mongoose = require("mongoose");

const calculatorSchema = mongoose.Schema({
  user_id: { type: mongoose.ObjectId, require: true },
  name: {
    type: String,
    require: true,
  },
  value: { type: String, require: true },
});

const Calcultor = mongoose.model("calculator", calculatorSchema);

module.exports = { Calcultor };
