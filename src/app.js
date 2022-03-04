require("dotenv").config();
const express = require("express");

const app = express();
app.use((req, res, next) => {
  console.log("web started");
  res.status(201);
  res.json({ message: "welcome to the coffee world" });
});

module.exports = app;
