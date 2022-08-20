class errorDTO
{
    code;
    message;

    constructor(data) {
        this.code = data._code;
        this.message = data._message;
    }
}

module.exports = errorDTO;