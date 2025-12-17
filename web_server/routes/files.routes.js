const express = require('express');
const router = express.Router();
const filesController = require('../controllers/files.controller');

// GET /api/files - Route to list all root files and folders for the authenticated user
router.get('/', filesController.list);

// POST /api/files - Route to create a new file or folder entry
router.post('/', filesController.create);

// GET /api/files/:id - Route to retrieve metadata for a specific file or folder by its ID
router.get('/:id', filesController.getById);

// PATCH /api/files/:id - Route to update existing file/folder metadata (e.g., name)
router.patch('/:id', filesController.update);

// DELETE /api/files/:id - Route to permanently remove a file or folder metadata
router.delete('/:id', filesController.remove);

module.exports = router;