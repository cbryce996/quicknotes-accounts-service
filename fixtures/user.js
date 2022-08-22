function makeFakeUser(overrides) {
    const user = {
        id: 1,
        username: 'test-user',
        password: 'test-password'
    }

    return {
        ...user,
        ...overrides
    }
}

module.exports = makeFakeUser;