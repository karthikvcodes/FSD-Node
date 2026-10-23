const courseModel = require("../models/courseModel");
const studentModel = require("../models/studentModel");
const AppError = require("../utils/AppError");

const createStudent = async (req, res, next) => {
  try {
    const { name, email, age, course } = req.body;

    const isCourseExists = await courseModel.findById(course);
    if (!isCourseExists) {
      return res.status(404).json({
        message: "Course not found",
        success: false,
      });
    }
    const student = await studentModel.create({
      name,
      email,
      age,
      course,
    });
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
  const students = await studentModel
    .find()
    .populate("course", "name duration fees");
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
