const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json()); // middleware, next()

// base url : http://localhost:3000

//routs
// GET - /students - all
// GET - /students/:id - single std
// POST - /students - add std
// PUT - /students/:id - update std info
// DELETE - /students/:id - Delete std

// TMP DB
const students = [
  {
    id: 1,
    name: "Arun",
    course: "React",
  },
  {
    id: 2,
    name: "Meera",
    course: "Node.js",
  },
];

const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

const middleware1 = (req, res, next) => {
  console.log("middleware 1");
  next();
};

const middleware2 = (req, res, next) => {
  res.json({ message: "Request stopped!!!" });
};

// app.use(logger);
// app.use(middleware1);
app.use(middleware2);

//GET - get all students
app.get("/students", (req, res) => {
  res.json(students);
});

//GET - get one student
app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((student) => student.id === id);
  if (!student) {
    res.status(404).json({
      message: "Student not found",
    });
  }
  res.json(student);
});

//POST - add student
app.post("/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    course: req.body.course,
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

//PUT - update student
app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((student) => student.id === id);
  if (!student) {
    res.status(404).json({
      message: "Student not found",
    });
  }
  student.name = req.body.name;
  student.course = req.body.course;

  res.json(student);
});

//DELETE - Delete student
app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const studentIndex = students.findIndex((student) => student.id === id);
  if (studentIndex === -1) {
    res.status(404).json({
      message: "Student not found",
    });
  }

  const deletedStudent = students.splice(studentIndex, 1);

  res.json({
    message: "Student deleted successfully",
    student: deletedStudent[0],
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
