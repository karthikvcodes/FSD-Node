const courseModel = require("../models/courseModel");

const createCourse = async (req, res, next) => {
  try {
    const course = await courseModel.create(req.body);
    res.status(201).json({
      success: true,
      data: course,
      message: "Student created successfully",
    });
  } catch (error) {
    next(error);
  }
};

const getCourses = async (req, res, next) => {
  try {
    const courses = await courseModel.find();
    res.status(200).json({
      success: true,
      data: courses,
      count: courses.length,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCourse,
  getCourses,
};
