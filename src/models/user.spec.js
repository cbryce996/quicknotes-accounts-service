const makeFakeUser = require('../../fixtures/user');

describe('user', () => {
    it ('must have an id', () => {
        const fakeUser = makeFakeUser({id: undefined});
    })
})