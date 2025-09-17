/**
 * Global error handler middleware
 */
function errorHandler(err, req, res, next) {
  console.error('Error occurred:', err.message);
  
  // Set default error status
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(status).json({
    error: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }) // Show stack trace in development only
  });
}

module.exports = errorHandler;