const fakeUser = require('../../fixtures/user')
const { makeUser } = require('./')

describe('user', () => {
    it('must include an id', () => {
        const user = fakeUser({ id: null })
        expect(() => makeUser(user)).toThrow('must include an id')
    })
    it('must include a username', () => {
        const user = fakeUser({ username: null })
        expect(() => makeUser(user)).toThrow('must include a username')
    })
    it('must include a password', () => {
        const user = fakeUser({ password: null })
        expect(() => makeUser(user)).toThrow('must include a password')
    })
})