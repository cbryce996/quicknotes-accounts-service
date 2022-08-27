const userFactory = require('./user')

// Dependency stubs
function md5 () { return true }

// Inject Dependencies
const makeUser = userFactory({ md5 })

module.exports = {
    makeUser
}