
const usersService = require('../services/users.service');

// Handle POST /api/users
function create(req, res, next) {
  try {
    // Read user data from request body
    const userData = req.body || {};

    // Create user via service
    const user = usersService.create(userData);

    // Return created user (without password)
    res.status(201).json(user);
  } catch (err) {
    // Forward error to error middleware
    next(err);
  }
}

// Handle GET /api/users/:id
function getById(req, res, next) {
  try {
    // Read user id from route params
    const { id } = req.params;

    // Get user via service
    const user = usersService.getById(id);

    // Return user (without password)
    res.status(200).json(user);
  } catch (err) {
    // Forward error to error middleware
    next(err);
  }
}

// Handle PATCH/PUT /api/users/:id 
function update(req, res, next) {
  try {
    // Read user id and updates
    const { id } = req.params;
    const updates = req.body || {};

    // Update user via service
    const user = usersService.update(id, updates);

    // Return updated user
    res.status(200).json(user);
  } catch (err) {
    // Forward error to error middleware
    next(err);
  }
}

// Handle DELETE /api/users/:id 
function remove(req, res, next) {
  try {
    // Read user id from route params
    const { id } = req.params;

    // Delete user via service
    usersService.remove(id);

    // No content on successful delete
    res.status(204).send();
  } catch (err) {
    // Forward error to error middleware
    next(err);
  }
}

module.exports = {
  create,
  getById,
  update,
  remove
};
