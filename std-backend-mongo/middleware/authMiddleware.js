const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authentication token required",
      });
    }

    const token = authHeader.slice(7).trim();

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication token required",
      });
    }
    //dev
    if (
      !process.env.JWT_SECRET ||
      !process.env.JWT_ISSUER ||
      !process.env.JWT_AUDIENCE
    ) {
      throw new Error("JWT configuration is missing");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      issuer: process.env.JWT_ISSUER,
      audience: process.env.JWT_AUDIENCE,
    });

    const user = await userModel
      .findById(decoded.sub)
      .select("_id name email role");

    if (!user) {
      res.status(401).json({
        message: "User no longer exists",
        success: false,
      });
    }

    req.user = {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role || "student",
    };

    next();
  } catch (error) {
    if (
      error.name === "JsonWebTokenError" ||
      error.name === "TokenExpiredError" ||
      error.name === "NotBeforeError"
    ) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired token",
      });
    }

    next(error);
  }
};

module.exports = protect;
