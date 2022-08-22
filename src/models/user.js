function buildMakeUser(/*{id, md5, sanitize}*/) {
    return function makeUser({
        id,
        username,
        password
    } = {}) {
        if (!id) {
            throw new Error('id is required');
        }
        if (!username) {
            throw new Error('username is required');
        }
        if (!password) {
            throw new Error('password is required');
        }
        
        return Object.freeze({
            getID: () => id,
            getUsername: () => username,
            getPassword: () => password
        })
    }
}

module.exports = buildMakeUser();