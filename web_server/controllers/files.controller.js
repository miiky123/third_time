const filesService = require('../services/files.service');

const filesController = {
    // GET /api/files - Returns root level files and folders
    list: async (req, res, next) => {
        try {
            // Requirement 50: User ID is passed via HTTP header
            const userId = req.headers['user-id']; 
            const files = await filesService.listRootFiles(userId);
            
            // Returns 200 OK with the list of files [cite: 71]
            res.status(200).json(files);
        } catch (error) {
            next(error); // Passes errors to the global error handler
        }
    },

    // POST /api/files - Creates a new file or folder
    create: async (req, res, next) => {
        try {
            const userId = req.headers['user-id'];
            const fileData = req.body; // Expects JSON body [cite: 42]
            
            const newFile = await filesService.createFile(fileData, userId);
            
            // Requirement 148: Return Location header and 201 Created [cite: 71]
            res.header('Location', `/api/files/${newFile.id}`);
            res.status(201).json(newFile);
        } catch (error) {
            next(error);
        }
    },

    // GET /api/files/:id - Gets metadata for a specific file
    getById: async (req, res, next) => {
        try {
            const userId = req.headers['user-id'];
            const { id } = req.params;
            const file = await filesService.getFileById(id, userId);
            
            res.status(200).json(file);
        } catch (error) {
            next(error);
        }
    },

    // PATCH /api/files/:id - Updates file/folder metadata
    update: async (req, res, next) => {
        try {
            const userId = req.headers['user-id'];
            const { id } = req.params;
            await filesService.updateFile(id, req.body, userId);
            
            // Returns 204 No Content for successful updates [cite: 71, 214]
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    },

    // DELETE /api/files/:id - Deletes a file/folder
    remove: async (req, res, next) => {
        try {
            const userId = req.headers['user-id'];
            const { id } = req.params;
            await filesService.deleteFile(id, userId);
            
            // Returns 204 No Content for successful deletion [cite: 71, 286]
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
};

module.exports = filesController;