class userDTO 
{
    id;
    username;
    password;

    constructor(data) 
    {
        this.id = data._id;
        this.username = data._username;
        this.password = data._password;
    }
}

module.exports = userDTO;