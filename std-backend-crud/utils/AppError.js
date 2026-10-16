class AppError extends Error {
  constructor(message, statusCode) {
    super(message); // err.message

    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

module.exports = AppError;
