const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  Time: {
    type: String,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = { User };
