let express = require('express');
let http = require('http');
http
console.log('hello world');

let app = express();

http.createServer(app).listen(3000);

app.get('/', (req, res) => {
res.send('hi kids');

})

