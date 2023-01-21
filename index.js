require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connect } = require("./src/config/db");
const { userRoute } = require("./src/Routes/userRoute");
const { calculatorRoute } = require("./src/Routes/Calculator");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/user", userRoute);
app.use("/calculator", calculatorRoute);

app.listen(process.env.PORT || 4000, async () => {
  await connect();
  console.log("listenting...");
});
