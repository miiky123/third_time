const permissionsService = require('../services/permissions.service');

const permissionsController = {
    // GET /api/files/:id/permissions - Lists permissions for a file
    list: async (req, res, next) => {
        try {
            const userId = req.headers['user-id'];
            const fileId = req.params.id; // File ID from URL [cite: 62]
            
            const permissions = await permissionsService.listPermissions(fileId, userId);
            res.status(200).json(permissions);
        } catch (error) {
            next(error);
        }
    },

    
    // POST /api/files/:id/permissions - Adds a new permission
    create: async (req, res, next) => {
        try {
            const userId = req.headers['user-id'];
            const fileId = req.params.id;
            
            const newPermission = await permissionsService.addPermission(fileId, req.body, userId);
            res.status(201).json(newPermission); // 201 for resource creation [cite: 71]
        } catch (error) {
            next(error);
        }
    },

    // PATCH /api/files/:id/permissions/:pId - Updates a specific permission
    update: async (req, res, next) => {
        try {
            const userId = req.headers['user-id'];
            const { pId } = req.params; // Permission ID 
            
            await permissionsService.updatePermission(pId, req.body, userId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    },

    // DELETE /api/files/:id/permissions/:pId - Revokes a specific permission
    remove: async (req, res, next) => {
        try {
            const userId = req.headers['user-id'];
            const { pId } = req.params;
            
            await permissionsService.deletePermission(pId, userId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
};

module.exports = permissionsController;