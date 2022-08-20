const express = require("express");
const makeUserService = require("./services/makeUserService");
const app = express();
const port = process.env.PORT || 3000;
const createUserService = require('./services/makeUserService');

app.listen(port, () => {
    console.log('Server is running on port 3000');
});

data = 
{
    _username: 'test',
    _password: 'test'
}

const user = new makeUserService(data);

console.log(user.username);
console.log(user.id.toString());
