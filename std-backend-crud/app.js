const express = require("express");
const studentRoutes = require("./routes/studentRoute");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

// welcome
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `${process.env.APP_NAME || "Student API"} is running`,
  });
});

app.use("/students", studentRoutes);

app.get("/test-error", (req, res, next) => {
  const error = new Error("Something went wrong!!!");
  error.statusCode = 500;
  next(error);
});

app.use((req, res, next) => {
  const error = new Error("API endpoint not found");
  error.statusCode = 404;
  next(error);
});

app.use(errorHandler);

module.exports = app;
