const { createUser, toPublicUser } = require('../models/user.model');
const usersRepository = require('../repositories/users.repository');
const { badRequest, notFound } = require('../utils/httpErrors');
const { generateId } = require('../utils/id');

// Create a new user
function create(userData) {
  // Validate required fields
  const { username, password, name, imageUrl } = userData;
  if (!username || !password || !name) {
    throw badRequest('Missing required fields (username, password, name)');
  }

  // Check for duplicate username
  const existing = usersRepository.findByUsername(username);
  if (existing) {
    throw badRequest('Username already exists');
  }

  // Create user object
  const id = generateId();
  const user = createUser({
    id,
    username,
    password,
    name,
    imageUrl: imageUrl || null
  });

  // Save to repository
  usersRepository.add(user);

  // Return public user object
  return toPublicUser(user);
}

// Get a user by ID
function getById(id) {
  // Find user in repository
  const user = usersRepository.findById(id);
  if (!user) {
    throw notFound('User not found');
  }

  // Return public user object
  return toPublicUser(user);
}

// Update user 
function update(id, updates) {
  // Find existing user
  const user = usersRepository.findById(id);
  if (!user) {
    throw notFound('User not found');
  }

  // Update allowed fields only
  if (updates.name !== undefined) user.name = updates.name;
  if (updates.imageUrl !== undefined) user.imageUrl = updates.imageUrl;

  // Save back to repository
  usersRepository.update(user);

  // Return updated public user
  return toPublicUser(user);
}

// Delete user 
function remove(id) {
  const exists = usersRepository.findById(id);
  if (!exists) {
    throw notFound('User not found');
  }

  usersRepository.remove(id);
}

module.exports = {
  create,
  getById,
  update,
  remove
};
