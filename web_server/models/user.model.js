// models/user.model.js

/**
 * Build a normalized user object.
 * This is the *only* place in the code where we construct user objects,
 * so all services/repositories get the same shape.
 */
function createUser({ id, username, password, name, imageUrl = null, createdAt = null }) {
  if (!id) {
    throw new Error('User id is required');
  }
  if (!username) {
    throw new Error('Username is required');
  }
  if (!password) {
    throw new Error('Password is required');
  }
  if (!name) {
    throw new Error('Name is required');
  }

  return {
    id: String(id),
    username: String(username),
    password: String(password),
    name: String(name),
    imageUrl: imageUrl ?? null,
    createdAt: createdAt instanceof Date ? createdAt : new Date()
  };
}

/**
 * Return a "public" version of the user without sensitive fields (e.g. password).
 * Controllers should use this when returning user objects to the client.
 */
function toPublicUser(user) {
  if (!user) {
    return null;
  }

  // remove password and any other sensitive fields in one place
  const { password, ...rest } = user;
  return rest;
}

module.exports = {
  createUser,
  toPublicUser
};
