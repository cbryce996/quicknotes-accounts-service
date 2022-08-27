const { makeUser } = require('../models')

function addUserFactory({ userDb }) {
    return function makeAddUser({ id, username, password }) {
        const user = makeUser({ id, username, password })
        return userDb.insert({
            id,
            username,
            password
        })
    }
}

module.exports = addUserFactory