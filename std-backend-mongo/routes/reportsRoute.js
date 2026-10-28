const express = require("express");

const { getStudentsReport } = require("../controllers/reportController");

const router = express.Router();

router.get("/students", getStudentsReport);

module.exports = router;
