const mongoose = require("mongoose");
const connectDB = async () => {
  const DB_URI = process.env.MONGO_DB_URI;
  if (!DB_URI) {
    throw new Error("DB url is missing, add URI in your env file");
  }
  const connection = await mongoose.connect(DB_URI);
  console.log("Mongo DB connected!!!");
  return connection;
};

module.exports = connectDB;
