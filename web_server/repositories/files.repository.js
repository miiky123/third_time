const files = new Map();

const filesRepository = {
    add: (file) => {
        files.set(file.id, file);
        return file;
    },
    findById: (id) => {
        return files.get(id);
    },
    findAllRootByOwner: (ownerId) => {
        return Array.from(files.values()).filter(file => 
            file.ownerId === ownerId && (!file.parentId || file.parentId === '/')
        );
    },
    update: (id, updates) => {
        const file = files.get(id);
        if (file) {
            const updatedFile = { ...file, ...updates };
            files.set(id, updatedFile);
            return updatedFile;
        }
        return null;
    },
    remove: (id) => {
        return files.delete(id);
    },
    getAll: () => {
        return Array.from(files.values());
    }
};

module.exports = filesRepository;