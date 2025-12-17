const createFile = ({ id, name, ownerId, parentId = '/', type = 'file' }) => {
    if (!id || !name || !ownerId) {
        throw new Error('Missing required fields for File model');
    }
    return {
        id,
        name,
        ownerId,
        parentId,
        type,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
};

module.exports = createFile;