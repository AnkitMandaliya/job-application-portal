const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err.name === "MulterError") {
    return res.status(400).json({
      message: err.message
    });
  }

  if (err.message?.includes("Only PDF")) {
    return res.status(400).json({
      message: err.message
    });
  }

  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error"
  });
};

export default errorHandler;
