const tokensService = require('../services/tokens.service');

// Handle POST /api/tokens  (login)
function create(req, res, next) {
  try {
    // Read username + password from request body
    const { username, password } = req.body || {};

    // Call login logic from the service
    const result = tokensService.create({ username, password });

    // Return the result 
    res.status(200).json(result);
  } catch (err) {
    // Forward error to error middleware
    next(err);
  }
}

module.exports = {
  create
};
