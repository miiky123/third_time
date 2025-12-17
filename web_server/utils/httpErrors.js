// Create a 400 Bad Request error
function badRequest(message) {
  const err = new Error(message);   
  err.status = 400;                 
}

// Create a 401 Unauthorized error
function unauthorized(message) {
  const err = new Error(message);   
  err.status = 401;                 
  return err;
}

// Create a 404 Not Found error
function notFound(message) {
  const err = new Error(message);   
  err.status = 404;                
  return err;
}

module.exports = {
  badRequest,
  unauthorized,
  notFound
};
