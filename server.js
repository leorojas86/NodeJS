var http = require('http');
var config = require('./config');

var server = http.createServer(handleRequest);
server.listen(config.PORT, config.HOST_NAME, onServerStarted);

function handleRequest(req, res)
{
	res.statusCode = 200;
  	res.setHeader('Content-Type', 'text/plain');
  	res.end('Hello World\n');
}

function onServerStarted()
{
	console.log(`Server running at http://${config.HOST_NAME}:${config.PORT}/`);
}