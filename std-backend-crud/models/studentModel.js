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

let nextID = 3;

const getAll = async () => {
  return students;
};

const getById = async (id) => {
  return students.find((student) => student.id === id);
};

const create = async (name, course) => {
  const student = {
    id: nextID++,
    name,
    course,
  };
  students.push(student);
  return student;
};

const update = async (id, name, course) => {
  const student = students.find((item) => item.id === id);
  if (!student) return null;
  student.name = name;
  student.course = course;
  return student;
};

const remove = async (id) => {
  const index = students.findIndex((item) => item.id === id);
  if (index === -1) return null;
  const [deletedStudent] = students.slice(index, 1);
  return deletedStudent;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
