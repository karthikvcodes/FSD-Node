const mongoose = require("mongoose");
const studentModel = require("../models/studentModel");
const courseModel = require("../models/courseModel");

const getStudentsReport = async (req, res, next) => {
  console.log("QUERY :", req.query);

  try {
    const page = Number(req.query.page ?? 1);
    const limit = Number(req.query.limit ?? 5);

    if (
      !Number.isFinite(page) ||
      !Number.isFinite(limit) ||
      page < 1 ||
      limit < 1 ||
      limit > 50
    ) {
      res.status(400).json({
        success: false,
        message: "Invalid page or limit",
      });
    }

    const filter = {};
    // min age
    console.log("min age:", Number.isFinite(req.query.minAge));

    if (req.query.minAge) {
      if (req.query.minAge !== undefined) {
        // if (!Number.isFinite(req.query.minAge)) {
        //   res.status(400).json({
        //     success: false,
        //     message: "Invalid age",
        //   });
        // }
        filter.age = { $gte: req.query.minAge };
      }
    }
    // course ID
    if (req.query.courseID) {
      if (req.query.courseID !== undefined) {
        if (!mongoose.isValidObjectId(req.query.courseID)) {
          res.status(400).json({
            success: false,
            message: "Invalid course ID",
          });
        }
        filter.course = res.query.courseID;
      }
    }

    if (req.query.ageGroup === "18to30") {
      filter.age = {
        $gte: 18,
        $lte: 30,
      };
    }

    const sortBy = ["name", "age", "createdAt"].includes(req.query.sort)
      ? req.query.sort
      : "name";

    const order = (req.query.order = "desc" ? -1 : 1);

    const sortVal = {
      [sortBy]: order,
      _id: 1,
    };

    const skip = (page - 1) * limit;
    console.log("FILTER :", filter);

    const [students, total] = await Promise.all([
      await studentModel
        .find(filter)
        .populate("course", "name duration fees")
        .select("name email age course createdAt")

        .sort(sortVal)
        .skip(skip)
        .limit(limit),
      studentModel.countDocuments(filter),
    ]);

    res.status(200).json({
      success: true,
      filter,
      currentPage: page,
      limit,
      total,
      data: students,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getStudentsReport,
};
