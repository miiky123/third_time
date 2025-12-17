const filesRepository = require('../repositories/files.repository');
const createFile = require('../models/file.model');
const { generateId } = require('../utils/id');

const filesService = {
    listRootFiles: async (userId) => {
        return filesRepository.findAllRootByOwner(userId);
    },
    createFile: async (fileData, userId) => {
        if (!fileData.name) {
            const error = new Error('Name is required');
            error.status = 400;
            throw error;
        }
        const newFile = createFile({
            id: generateId(),
            name: fileData.name,
            ownerId: userId,
            type: fileData.type || 'file',
            parentId: fileData.parentId || '/'
        });
        return filesRepository.add(newFile);
    },
    getFileById: async (id, userId) => {
        const file = filesRepository.findById(id);
        if (!file) {
            const error = new Error('File not found');
            error.status = 404;
            throw error;
        }
        if (file.ownerId !== userId) {
            const error = new Error('Unauthorized access');
            error.status = 401;
            throw error;
        }
        return file;
    },
    updateFile: async (id, updates, userId) => {
        await filesService.getFileById(id, userId);
        return filesRepository.update(id, updates);
    },
    deleteFile: async (id, userId) => {
        await filesService.getFileById(id, userId);
        return filesRepository.remove(id);
    }
};

module.exports = filesService;