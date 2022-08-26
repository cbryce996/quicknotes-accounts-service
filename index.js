const express = require('express');
const makeUser = require('./src/models/user')
const makeUserDB = require('./src/data_access/user_db')
const makeAddUser = require('./src/use_cases/add_user')
const makeFakeUser = require('./fixtures/user')
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is running on port 3000');
});

const userDB = makeUserDB();
const addUser = makeAddUser({userDB});
const user = makeFakeUser();

console.log(addUser(user))