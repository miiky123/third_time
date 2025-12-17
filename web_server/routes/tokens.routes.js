// routes/tokens.routes.js

const express = require('express');
const router = express.Router();

const tokensController = require('../controllers/tokens.controller');

// Login and create a token/user session
router.post('/', tokensController.create);

module.exports = router;
