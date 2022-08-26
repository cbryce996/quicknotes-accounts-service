/*
    @Description: User factory for creating user objects and ensuring valid state upon creation.
*/

// Dependencies are injected as an object
function buildMakeUser(/*{_id, _md5, _sanitize}*/) {
    return function makeUser({
        id,
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
        //username = _sanitize.sanitize(username);
        //password = _sanitize.sanitize(password);

        // Hash and salt password
        //password = _md5.saltHash(password);

        // Returns an immutable objects with getters
        return Object.freeze({
            getID: () => id,
            getUsername: () => username,
            getPassword: () => password
        })
    }
}

module.exports = buildMakeUser();