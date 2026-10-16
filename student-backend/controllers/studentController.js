const students = require("../models/studentModel");

const getStudents = (req, res) => {
  res.json({
    success: true,
    data: students,
  });
};

const addStudent = (req, res) => {
  const { name, course } = req.body;
  const newStudent = {
    id: students.length + 1,
    name,
    course,
  };
  students.push(newStudent);
  res.status(201).json({
    success: true,
    message: "Student added successfully",
    data: newStudent,
  });
};

module.exports = {
  getStudents,
  addStudent,
};
