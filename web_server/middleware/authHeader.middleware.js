// Extract the user ID from the 'x-user-id' header.
// This middleware adds req.userId to every request.
function authHeaderMiddleware(req, res, next) {
  const userId = req.header('x-user-id');  // Get the header sent by the client
  req.userId = userId || null;             // Attach it to req so controllers can use it
  next();                                   // Continue to the next middleware or route
}

module.exports = authHeaderMiddleware;
