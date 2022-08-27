const addUserFactory = require('./add_user')

// Get dependencies
const { userDb } = require('../data_access')

// Inject dependencies
const makeAddUser = addUserFactory({ userDb })

module.exports = {
    makeAddUser
}