const express = require("express");
const studentsRoute = require("./routes/stundentsRoute");
const courseRoute = require("./routes/courseRoute");
const reportsRoute = require("./routes/reportsRoute");
const protect = require("./middleware/authMiddleware");

const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/authRoute"));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `${process.env.APP_NAME || "Student Mongo DB API"} is running`,
  });
});

app.use("/students", studentsRoute);
app.use("/courses", courseRoute);
app.use("/reports", reportsRoute);

module.exports = app;
