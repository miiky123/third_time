const permissions = new Map();

const permissionsRepository = {
    add: (permission) => {
        permissions.set(permission.id, permission);
        return permission;
    },
    findById: (id) => {
        return permissions.get(id);
    },
    findByFileId: (fileId) => {
        return Array.from(permissions.values()).filter(p => p.fileId === fileId);
    },
    update: (id, updates) => {
        const permission = permissions.get(id);
        if (permission) {
            const updatedPermission = { ...permission, ...updates };
            permissions.set(id, updatedPermission);
            return updatedPermission;
        }
        return null;
    },
    remove: (id) => {
        return permissions.delete(id);
    },
    removeByFileId: (fileId) => {
        const filePermissions = Array.from(permissions.values()).filter(p => p.fileId === fileId);
        filePermissions.forEach(p => permissions.delete(p.id));
    }
};

module.exports = permissionsRepository;