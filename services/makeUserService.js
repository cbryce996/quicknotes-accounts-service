/*
    @Description: Factory class for creating user objects, enforces business rules and ensures a valid state upon creation
*/

const userDTO =  require('../dtos/userDTO');
const bsonObjectID = require('bson').ObjectID;

class makeUserService
{
    // Dependency injected constructor
    /*constructor({id, md5, sanitize}, data)
    {
        // Make a new userDTO object, inject dependencies and return a frozen instance
        return Object.freeze(new userDTO({_id: id, _username: data._username, _password: data._password}));
    }*/

    // Default constructor
    constructor(data)
    {
        // Make a new userDTO object, inject dependencies and return a frozen instance
        return Object.freeze(new userDTO({_id: new bsonObjectID(), _username: data._username, _password: data._password}));
    }
}

module.exports = makeUserService;