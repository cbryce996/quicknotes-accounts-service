function makeUserDB() {
    function insert(data) {
        return data;
    }
    
    return Object.freeze({
        insert
    })
}

module.exports = makeUserDB;