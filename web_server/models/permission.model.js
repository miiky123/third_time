const createPermission = ({ id, fileId, userId, role = 'viewer' }) => {
    if (!id || !fileId || !userId) {
        throw new Error('Missing required fields for Permission model');
    }
    const validRoles = ['owner', 'editor', 'viewer'];
    if (!validRoles.includes(role)) {
        throw new Error(`Invalid role: ${role}`);
    }
    return {
        id,
        fileId,
        userId,
        role,
        createdAt: new Date().toISOString()
    };
};

module.exports = createPermission;