// Catch server errors and return a clean JSON response
function errorMiddleware(err, req, res, next) {
  console.error(err); // Log for debugging

  const status = err.status || 500; // Default to 500 if no status provided
  const message = err.message || 'Internal Server Error';

  res.status(status).json({ error: message });
}

module.exports = errorMiddleware;
