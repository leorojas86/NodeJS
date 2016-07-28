var http = require('http');
var config = require('./config');

var server = http.createServer(function(req, res) 
{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(config.PORT, config.HOST_NAME, function() 
{
  console.log(`Server running at http://${config.HOST_NAME}:${config.PORT}/`);
});