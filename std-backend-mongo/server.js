require("dotenv").config();

const connectDB = require("./db");
const app = require("./app");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on PORT : ${PORT}`);
    });
  } catch (error) {
    console.log("Error:", error.message);
  }
};
startServer();
