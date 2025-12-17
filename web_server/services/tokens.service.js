const usersRepository = require('../repositories/users.repository');
const { badRequest, unauthorized } = require('../utils/httpErrors');

// Create a login token (simple login that returns userId)
function create({ username, password }) {
  // Validate required fields
  if (!username || !password) {
    throw badRequest('Missing username or password');
  }

  // Find user by username
  const user = usersRepository.findByUsername(username);
  if (!user) {
    // Do not expose if the username exists or not
    throw unauthorized('Invalid username or password');
  }

  // Check password
  if (user.password !== password) {
    throw unauthorized('Invalid username or password');
  }

  // For now we return only userId 
  return { userId: user.id };
}

module.exports = {
  create
};
