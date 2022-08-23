/*
    @Description: User factory for creating user instances and ensuring valid state upon creation.
*/

// Dependencies are injected as an object
function buildMakeUser(/*{_id, _md5, _sanitize}*/) {
    return function makeUser({
        id = _id.newID(),
        username,
        password
    } = {}) {
        // Domain business logic
        if (!id) {
            throw new Error('id is required');
        }
        if (!username) {
            throw new Error('username is required');
        }
        if (!password) {
            throw new Error('password is required');
        }

        // Sanitize inputs
        //_sanitize.sanitize(username);
        //_sanitize.sanitize(password);

        // Hash and salt password
        //_md5.saltHash(password);

        // Returns an immutable instance with getters
        return Object.freeze({
            getID: () => id,
            getUsername: () => username,
            getPassword: () => password
        })
    }
}

module.exports = buildMakeUser();