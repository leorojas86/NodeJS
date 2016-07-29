var http   = require('http');
var config = require('./config');
var utils  = require('./utils');
var server = http.createServer(handleRequest);
server.listen(config.PORT, onServerStarted);

function handleRequest(req, res)
{
	utils.initialize(req);

	res.statusCode = 200;
  	res.setHeader('Content-Type', 'text/plain');
  	res.end('Hello World\n');

  	var service = utils.params['service'];
  	console.log('service = ' + service);

  	//switch(service)
  	//{
  		/*case 'Cache':
  			require('./config').service(req, res);
  		break;*/
  		//default:
  			//console.log(`Unknown service ${service}`);
  		//break;
  	//}
}

function onServerStarted()
{
	console.log(`Server running at http://localhost:${config.PORT}/`);
}