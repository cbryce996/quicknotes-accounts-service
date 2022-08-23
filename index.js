const express = require('express');
const makeUser = require('./src/models/user')
const makeFakeUser = require('./fixtures/user')
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is running on port 3000');
});


const user = makeUser({id: 1, username: 'cameron', password: 'verysecret'});

console.log(user.getUsername());