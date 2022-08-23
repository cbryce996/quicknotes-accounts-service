const makeFakeUser = require('../../fixtures/user');
const makeUser = require('./user');

describe('user', () => {
    it ('must have an id', () => {
        const fakeUser =  makeFakeUser({id: null});
        expect(() => makeUser(fakeUser)).toThrow('id is required')
    })
    it ('must have a username', () => {
        const fakeUser =  makeFakeUser({username: null});
        expect(() => makeUser(fakeUser)).toThrow('username is required')
    })
    it ('must have a password', () => {
        const fakeUser =  makeFakeUser({password: null});
        expect(() => makeUser(fakeUser)).toThrow('password is required')
    })
})