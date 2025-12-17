const app = require('./app');

// Default port is 3000 if not provided from env
const PORT = process.env.PORT || 3000;

// Start HTTP server and keep process alive
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
