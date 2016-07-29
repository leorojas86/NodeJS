var http   = require('http');
var config = require('./config.js');
var utils  = require('./utils.js');
var server = http.createServer(handleRequest);
server.listen(config.PORT, onServerStarted);

function handleRequest(req, res)
{
	utils.initialize(req);

	res.statusCode = 200;
  	res.setHeader('Content-Type', 'text/plain');
  	res.end('Hello World\n');

  	var service = utils.params['service'];

  	switch(service)
  	{
  		case 'Cache':
  			require('./cache_service.js').service(req, res);
  		break;
  		default:
  			console.log(`Unknown service '${service}'`);
  		break;
  	}
}

function onServerStarted()
{
	console.log(`Server running at http://localhost:${config.PORT}/`);
}