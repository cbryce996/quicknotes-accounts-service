const makeUserDb = require('./user_db')

// Dependency injection
const userDb = makeUserDb(/*{Dependencies}*/)

module.exports = {
    userDb
}