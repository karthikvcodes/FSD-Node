const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Student name is required"],
      trim: true,
      minlength: [3, "Name must contain at least 3 characters"],
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    age: {
      type: Number,
      required: [true, "Student age is required"],
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
      // type: String,
      // required: [true, "Student course is required"],
      // enum: {
      //   values: ["React", "Node", "JS"],
      //   message: "Course must be React, Node or JS",
      // },
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Students", studentSchema);
