var express = require('express');
var app = express();

var ROOT_DIRECTORY = './public';
var ANGULAR_INDEX_FILE = 'index.html';

app.use(express.static('public'));
app.get('/', function (req, res) {
	res.sendfile('Hello World!');
});

app.listen(3000, function() {
	console.log('Server listening on port 3000');
});