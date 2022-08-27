function makeFakeUser(overrides) {
    const user = {
        id: 1,
        username: 'cameron',
        password: 'supersecret'
    }

    return {
        ...user,
        ...overrides
    }
}

module.exports = makeFakeUser