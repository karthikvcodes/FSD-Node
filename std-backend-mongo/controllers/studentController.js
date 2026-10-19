const studentModel = require("../models/studentModel");
const AppError = require("../utils/AppError");

const createStudent = async (req, res, next) => {
  try {
    const student = await studentModel.create(req.body);
    res.status(201).json({
      success: true,
      data: student,
      message: "Student created successfully",
    });
  } catch (error) {
    next(error);
  }
};

const getAllStudents = async (req, res, next) => {
  const students = await studentModel.find();
  res.status(200).json({
    success: true,
    data: students,
    count: students.length,
  });
};
module.exports = {
  createStudent,
  getAllStudents,
};
