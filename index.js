const express = require('express');

const app = express();

http.createServer(app).listen(3000);

app.get('/', (req, res) => {
res.send('hi kids');
res.send('<a href="localhost:3000/route1">lol</a>');
});

app.get('/route1', (req, res) => {
res.send('moin männer')
});

