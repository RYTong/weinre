var path = require('path');
var fs   = require('fs');

var rootPath = path.dirname(fs.realpathSync(__filename));

var lib          = path.join(rootPath, 'lib');
var node_modules = path.join(rootPath, 'node_modules');

require(path.join(node_modules, 'coffee-script'));
var cli = require(path.join(lib, '/cli'));

function run(){
  cli.run();
};

exports.weinre = run;
