// Add user use case
// - Capture user data
// - Make user entity with captured data
// - Send user entity to dao

const makeAddUser = require('./add_user');
const makeUserDB = require('../data_access/user_db');
const makeFakeUser = require('../../fixtures/user');

describe('add user', () => {

    it ('should add user to the database', () => {
        const userDB = makeUserDB();
        const user = makeFakeUser();
        const addUser = makeAddUser({userDB});
        const insertedUser = addUser(user);

        expect(insertedUser).toMatchObject(user);
    })
})