const express = require('express');
const http = require('http');
const app = express();

http.createServer(app).listen(3000);

app.get('/', (req, res) => {
res.send('hi kids');
res.send();
});

app.get('/route1', (req, res) => {
res.send('moin männer')
});

