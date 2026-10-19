const express = require("express");
const studentsRoute = require("./routes/stundentsRoute");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `${process.env.APP_NAME || "Student Mongo DB API"} is running`,
  });
});

app.use("/students", studentsRoute);

module.exports = app;
