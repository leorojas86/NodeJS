function Utils()
{
  this.params = {};

  this.initialize = function(req)
  {
    var indexOfParams = req.url.indexOf('?');

    if(indexOfParams != -1)
    {
      var paramsString = req.url.slice(indexOfParams + 1, req.url.length - indexOfParams + 1);
      var paramsArray  = paramsString.split(',');

      for(var i = 0; i < paramsArray.length; i++)
      {
        var currentParam  = paramsArray[i];
        var keyValueArray = currentParam.split('=');
        var key           = keyValueArray[0];
        var value         = keyValueArray[1];
        this.params[key]  = value;
      }
    }
  };
}

module.exports = new Utils();