const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req);
    res.send('Hello World!');
});

app.get('/users/', (req, res) => {
    let foo = 10;


    console.log(foo*2);
    res.send('Users!' + foo);
});

app.listen(3000, () => {
    console.log('Example app listening on http://localhost:3000/')
});
