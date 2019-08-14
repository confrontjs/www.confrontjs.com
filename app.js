const path = require('path');
const http = require('http');
const process = require('process');
const dotenv = require('dotenv');

dotenv.config({
    path: path.join(__dirname, 'app.env')
});

const url = process.env.REDIRECT_URL;
const status = Number(process.env.REDIRECT_STATUS);
const host = process.env.HOST;
const port = Number(process.env.PORT);

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    res.writeHead(status, { 'Location': `${url}${req.url}` });
    res.end();
});

server.listen(port, host, () => {
    console.log(`Server was started at http://${host}:${port}`);
});
