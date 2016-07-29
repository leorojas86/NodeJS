function CacheService()
{
	this.service = function(req, res)
	{
		var method = req.params.method;

		switch(method)
	  	{
	  		case 'Get':
	  		break;
	  		default:
	  			console.log(`Unknown cache service method ${method}`);
	  		break;
	  	}
	};
}

module.exports = new CacheService();