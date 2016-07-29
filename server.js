var http = require('http');
var config = require('./config');
var server = http.createServer(handleRequest);
server.listen(config.PORT, onServerStarted);

function handleRequest(req, res)
{
	res.statusCode = 200;
  	res.setHeader('Content-Type', 'text/plain');
  	res.end('Hello World\n');

  	//var service = req.query['service'];

  	for(var key in req)
  		console.log(key);

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