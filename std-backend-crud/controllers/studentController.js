const Student = require("../models/studentModel");
const AppError = require("../utils/AppError");

const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.getAll();
    res.status(200).json({
      success: true,
      data: students,
      count: students.length,
    });
  } catch (error) {
    next(error);
  }
};

const getStudentById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      throw new AppError("Invalid student ID", 400);
    }

    const student = await Student.getById(id);
    if (!student) {
      throw new AppError("Student not found", 404);
    }
    res.status(200).json({
      success: true,
      data: student,
    });
  } catch (error) {
    next(error);
  }
};

const createStudent = async (req, res, next) => {
  try {
    const { name, course } = req.body;
    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof course !== "string" ||
      !course.trim()
    ) {
      throw new AppError("Name and course are required", 400);
    }

    const student = await Student.create(name.trim(), course.trim());
    res.status(201).json({
      success: true,
      data: student,
      message: "Student created successfully",
    });
  } catch (error) {
    next(error);
  }
};

const updateStudent = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { name, course } = req.body;

    if (!Number.isInteger(id) || id <= 0) {
      throw new AppError("Invalid student ID", 400);
    }

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof course !== "string" ||
      !course.trim()
    ) {
      throw new AppError("Name and course are required", 400);
    }
    const student = await Student.update(id, name, course);

    if (!student) {
      throw new AppError("Student not found", 404);
    }

    res.status(200).json({
      success: true,
      data: student,
      message: "Student updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      throw new AppError("Invalid student ID", 400);
    }

    const student = await Student.remove(id);
    if (!student) {
      throw new AppError("Student not found", 404);
    }
    res.status(200).json({
      success: true,
      data: student,
      message: "Student deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
