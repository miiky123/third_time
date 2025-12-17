const permissionsService = require('../services/permissions.service');

const permissionsController = {
    // GET /api/files/:id/permissions
    list: async (req, res, next) => {
        try {
            // Extracts the user ID from headers as per project requirements 
            const userId = req.headers['user-id'];
            const fileId = req.params.id;
            
            const permissions = await permissionsService.listRootPermissions(fileId, userId);
            
            // Returns 200 OK with the list of permissions in JSON format [cite: 63, 72]
            res.status(200).json(permissions);
        } catch (error) {
            next(error);
        }
    },

    // POST /api/files/:id/permissions
    create: async (req, res, next) => {
        try {
            const userId = req.headers['user-id'];
            const fileId = req.params.id;
            
            const newPermission = await permissionsService.addPermission(fileId, req.body, userId);
            
            // Returns 201 Created for a successful POST operation [cite: 63, 71]
            res.status(201).json(newPermission);
        } catch (error) {
            next(error);
        }
    },

    // PATCH /api/files/:id/permissions/:pId
    update: async (req, res, next) => {
        try {
            const userId = req.headers['user-id'];
            const { id, pId } = req.params;
            
            await permissionsService.updatePermission(id, pId, req.body, userId);
            
            // Returns 204 No Content for a successful update [cite: 65, 71]
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    },

    // DELETE /api/files/:id/permissions/:pId
    remove: async (req, res, next) => {
        try {
            const userId = req.headers['user-id'];
            const { id, pId } = req.params;
            
            await permissionsService.deletePermission(id, pId, userId);
            
            // Returns 204 No Content for a successful deletion [cite: 65, 71]
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
};

module.exports = permissionsController;