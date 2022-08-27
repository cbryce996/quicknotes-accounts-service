function makeUserDb (/*{Dependencies}*/) {
    function insert (data) {
        return data
    }
    return Object.freeze({
        insert
    })
}

module.exports = makeUserDb