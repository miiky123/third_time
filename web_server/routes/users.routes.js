const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller');

// Create a new user
router.post('/', usersController.create);

// Get a user by id
router.get('/:id', usersController.getById);

// Update an existing user
router.patch('/:id', usersController.update);

// Delete a user
router.delete('/:id', usersController.remove);

module.exports = router;
