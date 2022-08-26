/*
    @Description: Add user factory for adding users to database through injected data access object.
*/

const makeUser = require('../models/user');

// Dependencies are injected as an object
function buildAddUser({userDB}) {
    return function addUser(userData) {
        const user = makeUser(userData);
        return userDB.insert({
            id: user.getID(),
            username: user.getUsername(),
            password: user.getPassword()
        })
    }
}

module.exports = buildAddUser;