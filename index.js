const express = require('express');
const makeUser = require('./src/models/user')
const fakeUser = require('./fixtures/user')
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is running on port 3000');
});