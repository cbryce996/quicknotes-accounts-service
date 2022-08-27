// Inject dependencies
function userFactory (/*{Dependencies}*/) {
    return function makeUser({id, username, password}) {
        // Business logic
        if (!id) { throw new Error('must include an id') }
        if (!username) { throw new Error('must include a username') }
        if (!password) { throw new Error('must include a password') }
        return Object.freeze({
            getID: () => id,
            getUsername: () => username,
            getPassword: () => password
        })
    }
}

module.exports = userFactory