const fakeUser = require('../../fixtures/user')
const { makeAddUser } = require('./')

describe('add user', () => {
    it('should add user to database', () => {
        expect(fakeUser()).toEqual(makeAddUser(fakeUser()))
    })
})