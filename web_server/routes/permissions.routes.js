const express = require('express');
const router = express.Router();
const permissionsController = require('../controllers/permissions.controller');

// GET /api/files/:id/permissions - List all permissions for a file [cite: 62, 63]
router.get('/:id/permissions', permissionsController.list);

// POST /api/files/:id/permissions - Create a new permission for a file [cite: 63]
router.post('/:id/permissions', permissionsController.create);

// PATCH /api/files/:id/permissions/:pId - Update a specific permission 
router.patch('/:id/permissions/:pId', permissionsController.update);

// DELETE /api/files/:id/permissions/:pId - Delete a specific permission [cite: 65]
router.delete('/:id/permissions/:pId', permissionsController.remove);

module.exports = router;