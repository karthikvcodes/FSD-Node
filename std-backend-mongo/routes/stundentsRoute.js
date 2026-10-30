const express = require("express");

const {
  createStudent,
  getAllStudents,
} = require("../controllers/studentController");

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/", getAllStudents);
router.post("/", protect, authorize("admin"), createStudent);

module.exports = router;
