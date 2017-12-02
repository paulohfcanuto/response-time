var sleep = require('sleep');
var path = require('path');
var api = {}

api.foto = function (req, res) {
  //bug aqui kkkkk
  if(req.query.sleep !== undefined && !isNaN(Number(req.query.sleep))){
    sleep.sleep(Number(req.query.sleep))
  }else{
    sleep.sleep(15);
  }

  var options = {
    root: './app/image',
    dotfiles: 'allow',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  var fileName = req.params.file;
  res.sendFile(fileName, options)
};

module.exports = api;
