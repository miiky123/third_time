// In‑memory map of users
const users = new Map();

// Add a new user
function add(user) {
  users.set(user.id, user);
  return user;
}

// Find a user by ID
function findById(id) {
  return users.get(id);
}

// Find a user by username
function findByUsername(username) {
  for (const user of users.values()) {
    if (user.username === username) {
      return user;
    }
  }
  return undefined;
}

// Update an existing user
function update(user) {
  users.set(user.id, user);
  return user;
}

// Remove a user by id
function remove(id) {
  return users.delete(id);
}

module.exports = {
  add,
  findById,
  findByUsername,
  update,
  remove
};
